package tk.tnicy.matchbox.util;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;

import javax.imageio.ImageIO;
import javax.imageio.ImageReadParam;
import javax.imageio.ImageReader;
import javax.imageio.stream.ImageInputStream;
import java.awt.*;
import java.awt.geom.AffineTransform;
import java.awt.image.AffineTransformOp;
import java.awt.image.BufferedImage;
import java.io.*;
import java.util.Iterator;

/**
 * 图片工具类:
 * 功能：[裁剪/图片水印/文字水印/缩放补白/Base64加密解密]
 *
 * @author Master.Xia date:2016年11月17日11:52:38
 */
public final class ImageUtil {

    /**
     * 图片格式：JPG
     */
    private static final String PICTRUE_FORMATE_JPG = "jpg";

    private ImageUtil() {
    }

    /**
     * 图片裁剪
     *
     * @param src    原始图片输入流
     * @param out    成品图片输出流
     * @param x      开始位置的x坐标
     * @param y      开始位置的y坐标
     * @param width  裁剪的宽度
     * @param height 裁剪的高度
     * @throws IOException
     */
    public static void cut(InputStream src, OutputStream out, int x, int y, int width, int height) throws IOException {
        Iterator<ImageReader> iterator = ImageIO.getImageReadersByFormatName("jpg");
        ImageReader reader = iterator.next();
        ImageInputStream iis = ImageIO.createImageInputStream(src);
        reader.setInput(iis, true);
        ImageReadParam param = reader.getDefaultReadParam();
        Rectangle rect = new Rectangle(x, y, width, height);
        param.setSourceRegion(rect);
        BufferedImage bi = reader.read(0, param);
        ImageIO.write(bi, "jpg", out);
    }

    /**
     * 添加图片水印
     *
     * @param src   原始图片输入流
     * @param out   成品图片输出流
     * @param water 水印图片输入流
     * @param x     水印图片距离目标图片左侧的偏移量，如果x<0, 则在正中间
     * @param y     水印图片距离目标图片上侧的偏移量，如果y<0, 则在正中间
     * @param alpha 水印透明度(0.0 -- 1.0, 0.0为完全透明，1.0为完全不透明)
     */
    public final static void watermark(InputStream src, OutputStream out, InputStream water, int x, int y, float alpha) {
        try {
            Image image = ImageIO.read(src);
            int width = image.getWidth(null);
            int height = image.getHeight(null);
            BufferedImage bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
            Graphics2D g = bufferedImage.createGraphics();
            g.drawImage(image, 0, 0, width, height, null);

            Image waterImage = ImageIO.read(water);    // 水印文件
            int width_1 = waterImage.getWidth(null);
            int height_1 = waterImage.getHeight(null);
            g.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, alpha));

            int widthDiff = width - width_1;
            int heightDiff = height - height_1;
            if (x < 0) {
                x = widthDiff / 2;
            } else if (x > widthDiff) {
                x = widthDiff;
            }
            if (y < 0) {
                y = heightDiff / 2;
            } else if (y > heightDiff) {
                y = heightDiff;
            }
            g.drawImage(waterImage, x, y, width_1, height_1, null); // 水印文件结束
            g.dispose();
            ImageIO.write(bufferedImage, PICTRUE_FORMATE_JPG, out);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 添加文字水印
     *
     * @param src       原始图片输入流
     * @param out       成品图片输出流
     * @param waterText 水印文字， 如：夏老师V5
     * @param fontName  字体名称，    如：宋体|微软雅黑|楷体|...
     * @param fontStyle 字体样式：Font.BOLD|Font.ITALIC|...
     * @param fontSize  字体大小，单位为像素
     * @param color     字体颜色
     * @param x         水印文字距离目标图片左侧的偏移量，如果x<0, 则在正中间
     * @param y         水印文字距离目标图片上侧的偏移量，如果y<0, 则在正中间
     * @param alpha     水印透明度(0.0 -- 1.0, 0.0为完全透明，1.0为完全不透明)
     */
    public static void watermark(InputStream src, OutputStream out, String waterText, String fontName, int fontStyle, int fontSize, Color color, int x, int y, float alpha) {
        try {
            Image image = ImageIO.read(src);
            int width = image.getWidth(null);
            int height = image.getHeight(null);
            BufferedImage bufferedImage = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
            Graphics2D g = bufferedImage.createGraphics();
            g.drawImage(image, 0, 0, width, height, null);
            g.setFont(new Font(fontName, fontStyle, fontSize));
            g.setColor(color);
            g.setComposite(AlphaComposite.getInstance(AlphaComposite.SRC_ATOP, alpha));

            int width_1 = fontSize * getLength(waterText);
            int height_1 = fontSize;
            int widthDiff = width - width_1;
            int heightDiff = height - height_1;
            if (x < 0) {
                x = widthDiff / 2;
            } else if (x > widthDiff) {
                x = widthDiff;
            }
            if (y < 0) {
                y = heightDiff / 2;
            } else if (y > heightDiff) {
                y = heightDiff;
            }

            g.drawString(waterText, x, y + height_1);
            g.dispose();
            ImageIO.write(bufferedImage, PICTRUE_FORMATE_JPG, out);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    /**
     * 获取字符长度，一个汉字作为 1 个字符, 一个英文字母作为 0.5 个字符
     *
     * @param text
     * @return 字符长度，如：text="中国",返回 2；text="test",返回 2；text="中国ABC",返回 4.
     */
    public static int getLength(String text) {
        int textLength = text.length();
        int length = textLength;
        for (int i = 0; i < textLength; i++) {
            if (String.valueOf(text.charAt(i)).getBytes().length > 1) {
                length++;
            }
        }
        return (length % 2 == 0) ? length / 2 : length / 2 + 1;
    }

    /**
     * 图片缩放
     *
     * @param src    原始图片输入流
     * @param out    成品图片输出流
     * @param height 缩放后的高度
     * @param width  缩放后的宽度
     * @param bb     比例不对时是否需要补白
     */
    public static void resize(InputStream src, OutputStream out, int height, int width, boolean bb) {
        try {
            double ratio = 0; //缩放比例
            BufferedImage bi = ImageIO.read(src);
            Image itemp = bi.getScaledInstance(width, height, BufferedImage.SCALE_SMOOTH);
            //计算比例
            if ((bi.getHeight() > height) || (bi.getWidth() > width)) {
                if (bi.getHeight() > bi.getWidth()) {
                    ratio = (new Integer(height)).doubleValue() / bi.getHeight();
                } else {
                    ratio = (new Integer(width)).doubleValue() / bi.getWidth();
                }
                AffineTransformOp op = new AffineTransformOp(AffineTransform.getScaleInstance(ratio, ratio), null);
                itemp = op.filter(bi, null);
            }
            if (bb) {
                BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);
                Graphics2D g = image.createGraphics();
                g.setColor(Color.white);
                g.fillRect(0, 0, width, height);
                if (width == itemp.getWidth(null))
                    g.drawImage(itemp, 0, (height - itemp.getHeight(null)) / 2, itemp.getWidth(null), itemp.getHeight(null), Color.white, null);
                else
                    g.drawImage(itemp, (width - itemp.getWidth(null)) / 2, 0, itemp.getWidth(null), itemp.getHeight(null), Color.white, null);
                g.dispose();
                itemp = image;
            }
            ImageIO.write((BufferedImage) itemp, "jpg", out);
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /**
     * 对图片文件进行Base64编码，并加上DataURI前缀，可以直接在HTML中使用
     *
     * @param imageFile
     * @return
     * @throws IOException
     */
    public static String base64EncodeAsDataURI(File imageFile) throws IOException {
        return "data:image/png;base64," + base64Encode(imageFile);
    }

    /**
     * 对图片文件进行Base64编码
     *
     * @param imageFile
     * @return
     * @throws IOException
     */
    public static String base64Encode(File imageFile) throws IOException {
        byte[] data = FileUtils.readFileToByteArray(imageFile);
        return base64Encode(data);
    }

    /**
     * 对图片文件进行Base64编码
     *
     * @param image
     * @return
     * @throws IOException
     */
    public static String base64Encode(byte[] image) throws IOException {
        return Base64.encodeBase64String(image);
    }

    /**
     * 对图片文件进行Base64编码
     *
     * @param fileAbsPath
     * @return
     * @throws IOException
     */
    public static String base64Encode(String fileAbsPath) throws IOException {
        return base64Encode(new File(fileAbsPath));
    }

    /**
     * 对图片文件进行Base64编码
     *
     * @param image
     * @return
     * @throws IOException
     */
    public static String base64Encode(InputStream image) throws IOException {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        IOUtils.copy(image, output);
        return base64Encode(output.toByteArray());
    }

    /**
     * 把Base64解码为byte[]，然后写到输出流
     *
     * @param imgData 转换为图片的字符串
     * @param out     输出outputstream
     * @throws IOException
     */
    public static void base64Decode(String imgData, OutputStream out) throws IOException {
        byte[] b = Base64.decodeBase64(imgData);
        out.write(b);
        out.close();
    }

    /**
     * 把Base64解码为byte[]，然后写到文件中
     *
     * @param imgData
     * @param out
     * @throws IOException
     */
    public static void base64Decode(String imgData, File file) throws IOException {
        base64Decode(imgData, new FileOutputStream(file));
    }

    /**
     * 把Base64解码为byte[]，然后写到文件中
     *
     * @param imgData
     * @param outAbsPath
     * @throws IOException
     */
    public static void base64Decode(String imgData, String fileAbsPath) throws IOException {
        base64Decode(imgData, new FileOutputStream(fileAbsPath));
    }

    public static void main(String[] args) throws IOException {

        /* 文字水印 */
        File file = new File("d:/abc/mpt8_2013122423341787.jpg");
        InputStream in = new FileInputStream(file);
        OutputStream out = new FileOutputStream("d:/abc/hello.jpg");
        watermark(in, out, "HelloWorld", "宋体", Font.BOLD, 72, Color.WHITE, 100, 100, 0.5f);

    }

}
