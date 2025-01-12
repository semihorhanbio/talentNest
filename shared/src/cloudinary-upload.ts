import cloudinary, {
  UploadApiErrorResponse,
  UploadApiResponse,
} from 'cloudinary';

export async function uploads(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  try {
    const result = await cloudinary.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      resource_type: 'auto', // zip, images
    });
    return result;
  } catch (error) {
    return error as UploadApiErrorResponse;
  }
}

export async function videoUpload(
  file: string,
  public_id?: string,
  overwrite?: boolean,
  invalidate?: boolean
): Promise<UploadApiResponse | UploadApiErrorResponse | undefined> {
  try {
    const result = await cloudinary.v2.uploader.upload(file, {
      public_id,
      overwrite,
      invalidate,
      chunk_size: 50000,
      resource_type: 'video',
    });
    return result;
  } catch (error) {
    return error as UploadApiErrorResponse;
  }
}
