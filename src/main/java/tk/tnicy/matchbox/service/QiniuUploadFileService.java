package tk.tnicy.matchbox.service;

import com.google.gson.Gson;
import com.qiniu.common.QiniuException;
import com.qiniu.common.Zone;
import com.qiniu.http.Response;
import com.qiniu.storage.BucketManager;
import com.qiniu.storage.Configuration;
import com.qiniu.storage.UploadManager;
import com.qiniu.storage.model.DefaultPutRet;
import com.qiniu.util.Auth;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.tnicy.matchbox.util.QiniuConstant;

import java.io.FileInputStream;

@Service
public class QiniuUploadFileService {
    @Autowired
    private QiniuConstant qiniuConstant;

    /**
     * 将图片上传到七牛云
     */
    public String uploadImg(FileInputStream file, String key) {
        // 构造一个带指定Zone对象的配置类
        Configuration cfg = new Configuration(Zone.zone0());
        // 其他参数参考类注释
        UploadManager uploadManager = new UploadManager(cfg);
        // 生成上传凭证，然后准备上传

        try {
            Auth auth = Auth.create(qiniuConstant.getAccessKey(), qiniuConstant.getSecretKey());
            String upToken = auth.uploadToken(qiniuConstant.getBucket());
            try {
                Response response = uploadManager.put(file, key, upToken, null, null);
                // 解析上传成功的结果
                DefaultPutRet putRet = new Gson().fromJson(response.bodyString(), DefaultPutRet.class);

                String returnPath = qiniuConstant.getPath() + "/" + putRet.key;
                return returnPath;
            } catch (QiniuException ex) {
                Response r = ex.response;
                System.err.println(r.toString());
                try {
                    System.err.println(r.bodyString());
                } catch (QiniuException ex2) {
                    //ignore
                }
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        return "";
    }

    public String deleteImg(String key) {
        Auth auth = Auth.create(qiniuConstant.getAccessKey(), qiniuConstant.getSecretKey());
        // 构造一个带指定Zone对象的配置类
        Configuration cfg = new Configuration(Zone.zone0());
        // 其他参数参考类注释
        BucketManager bucketMgr = new BucketManager(auth, cfg);

        //指定需要删除的文件，和文件所在的存储空间
        String bucketName = qiniuConstant.getBucket();
        try {
            bucketMgr.delete(bucketName, key);//当前为7.2.1；  7.2.2后才能传多个key ，即：第二个参数为数组 (String... deleteTargets)
        } catch (QiniuException e) {
            e.printStackTrace();
        }
        return "done";
    }


}
