// page.tsx
import { auth } from '@clerk/nextjs/server';
import FileUploadComponent from './components/file_upload'

export default async function Home() {
  const { userId } = await auth();
  const isSignedIn = !!userId;

  if (!isSignedIn) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
        <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
         
          <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
            <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
              Welcome to PDF context AI chatting zone!
            </h1>
            <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              So baddie wanna chat with AI with PDF context? Head over to{" "}
                Prompting
              {" "}
              or the{" "}
            
                Learning
              {" "}
              center.
            </p>
          </div>
        </main>
      </div>
    );
  } else{
    return (
      <div className="flex h-screen">
      
      {/* LEFT SIDE - PDF Upload */}
      <div className="w-1/3 border-r flex flex-col items-center justify-center p-10">
        {/* <h2 className="text-xl font-semibold mb-4">Upload PDF</h2>

        <input type="file" accept="application/pdf" />

        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">
          Upload
        </button> */}
        <FileUploadComponent/>
      </div>

      {/* RIGHT SIDE - Chat */}
      <div className="w-1/2 flex flex-col justify-between p-6">

        <div className="flex-1 overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Chat with AI</h2>

          {/* Chat messages */}
          <div className="space-y-2">
            <p className="bg-gray-200 p-2 rounded w-fit">
              Hello! Upload a PDF to start chatting.
            </p>
          </div>
        </div>

        {/* Chat input */}
        <div className="flex gap-2 mt-4">
          <input
            type="text"
            placeholder="Ask something..."
            className="flex-1 border rounded px-3 py-2"
          />

          <button className="bg-purple-600 text-white px-4 py-2 rounded">
            Send
          </button>
        </div>

      </div>

    </div>
    )
  }
  
}
