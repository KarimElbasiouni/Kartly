import { NextRequest, NextResponse } from 'next/server';
import { uploadImageToS3 } from '@/lib/s3';
import prisma from '@/lib/prisma';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const productId = formData.get("productId") as string;
        const file = formData.get("file") as File;

        if (!file || !productId) {
            return NextResponse.json({ error: 'File and product ID are required' }, { status: 400 });
        }
        
        // Convert the file to a buffer for easy upload
        const buffer = Buffer.from(await file.arrayBuffer());

        // Upload to S3
        const imageUrl = await uploadImageToS3(buffer, file.name, file.type);

        // Save the image URL to the database

        const image = await prisma.productImage.create({
            data: {
                url: imageUrl,
                alt: file.name,
                productId: parseInt(productId),
            },
        })

        return NextResponse.json({ success: true, image }, { status: 201 });
    }   catch (error) {
        console.error('Error uploading image:', error);
        return NextResponse.json(
            { error: 'Failed to upload image' }, 
            { status: 500 }); 
    }

}