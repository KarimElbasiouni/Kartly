import { S3Client, PutObjectCommand, DeleteObjectCommand } from '@aws-sdk/client-s3';

const s3Client = new S3Client({
    region: process.env.AWS_REGION,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
    },
});

export async function uploadImageToS3(
    file: Buffer,
    fileName: string,
    contentType: string
): Promise<string> {
    const key = `products/${Date.now()}-${fileName}`

    await s3Client.send(
        new PutObjectCommand({
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: key,
            Body: file,
            ContentType: contentType,
        })
    )

    return `${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/${key}`
}
export async function deleteImageFromS3(imageUrl: string): Promise<void> {
        // Extract the key from the image full image URL
        const key = imageUrl.replace(`${process.env.NEXT_PUBLIC_S3_BUCKET_URL}/`, '')

        await s3Client.send(
            new DeleteObjectCommand({
                Bucket: process.env.AWS_BUCKET_NAME,
                Key: key,
            })
        )
}