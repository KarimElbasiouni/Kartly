"use client"

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

interface ImageUploaderProps {
    productId: number
    onUploadComplete: (imageUrl: string) => void
}

export default function ImageUploader ({ productId, onUploadComplete}: ImageUploaderProps) {
    const [isUploading, setIsUploading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    async function handleUpload(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsUploading(true)
        setError(null)

        const form = e.currentTarget
        const fileInput = form.elements.namedItem('file') as HTMLInputElement
        const file = fileInput.files?.[0]

        if (!file) {
            setError('Please select a file to upload.')
            setIsUploading(false)
            return
        }

        try {
            const formData = new FormData()
            formData.append('file', file)
            formData.append('productId', productId.toString())

            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData,
            })
            
            if (!response.ok) {
                throw new Error(`Upload failed: ${response.status}`)

            }

            const data = await response.json()
            onUploadComplete(data.image.url)
        }   catch (error: unknown){
            setError(error instanceof Error ? error.message : "Upload failed")

        }   finally {
            setIsUploading(false)
        }
    }

    return (
        
        <form onSubmit = {handleUpload} className = "space-y-4">
            <div>   
                <Input
                    type = "file"
                    name = "file"
                    accept = "image/*"
                    disabled = {isUploading}
                />
            </div>
            {error && <p className = "text-red-500 text-sm">{error}</p>}
            <Button type = "submit" disabled = {isUploading}>
                {isUploading ? "Uploading..." : "Upload Image"}
            </Button>
        </form>
    )


}