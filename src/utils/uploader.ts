import {
  getDownloadURL,
  StorageReference,
  uploadBytesResumable,
} from "firebase/storage";

export async function uploaderGetUrl(ref: StorageReference, data: File) {
  const uploadTask = uploadBytesResumable(ref, data);
  await new Promise((resolve, reject) => {
    uploadTask.on(
      "state_changed",
      null,
      (error) => {
        reject(error);
      },
      () => {
        resolve(uploadTask.snapshot.ref);
      }
    );
  });

  return await getDownloadURL(ref);
}
