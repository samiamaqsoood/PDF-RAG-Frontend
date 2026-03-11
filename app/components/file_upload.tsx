'use client'

import * as React from 'react';
import { Upload } from 'lucide-react';

const FileUploadComponent: React.FC = ()=> {
    const handleFileUPloadButtonClick = () =>{
        const el = document.createElement('input');
        el.setAttribute('type','file');
        el.setAttribute('accept','application/pdf');
        el.addEventListener('change', async (ev )=>{
            if(el.files && el.files.length > 0){
                const file = el.files.item(0);
                if (file){
                    const formData = new FormData();
                    formData.append('pdf', file);


                    await fetch('http://localhost:8000/upload/pdf',{
                        method:'POST',
                        body: formData
                    });
                    console.log("file uploaded!")
                }
            }
        })
        el.click();
    }
    return (
        <>
        <h2 className="text-xl font-semibold mb-4">Upload PDF</h2>
        <button onClick={handleFileUPloadButtonClick} className="mt-2 bg-blue-500 text-white px-4 py-2 rounded">
          <Upload className='w-20' />
        </button>
    
        </>
    )
}
export default FileUploadComponent;