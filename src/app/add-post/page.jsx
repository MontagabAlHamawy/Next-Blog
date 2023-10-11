"use client"


import styles from './addPost.module.css';
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.bubble.css';

function AddPost() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div className={styles.container}>
      <input type="text" placeholder='Title' className={styles.title}/>
      <div className={styles.editor}>
        <button className={styles.button}>
          <img src="/plus.png" alt="" className={styles.plusIcon} onClick={()=>{setOpen(!open)}} />
        </button>
        {open && (<div className={styles.add}>

          <button className={styles.addButton}>
            <img src="/img.png" alt="" className={styles.plusIcon2} />
          </button>

          <button className={styles.addButton}>
            <img src="/download.png" alt="" className={styles.plusIcon2} />
          </button>

          <button className={styles.addButton}>
            <img src="/vedio.png" alt="" className={styles.plusIcon2} />
          </button>

        </div>
        )}
        <ReactQuill theme='bubble' value={value} onChange={setValue} placeholder='Write The Post...'/>
      </div>
      <button className={styles.publish}>Publish</button>
    </div>
  )
}

export default AddPost