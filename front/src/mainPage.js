import React, { useEffect, useState } from 'react';
import axios from "axios";
import ImageDisplay from "./imageDisplay";



export default function MainPage()
{
    const [ImageList,setImageList] = useState({"images_list":[]});

    console.log(`ImageList ${ImageList}`)
     {
      useEffect(GetImageIdList, []);
     }

   

     function GetImageIdList()
    {
        const data = new FormData();
         axios.get('http://localhost:8080/back/getAllPost',data)
            .then(res =>{
                setImageList(res.data);
            })
    }

    const classNames = `Wall `;
    /*ImageList.images_list.map(image => (
                    <ImageDisplay
                        src={image.path}
                        key={image.id}
                        legend={image.legend}
                        note={image.note}
                        idImage={image.id}
                        tagsList={image.tags}
                        preview={"0"}/>
                ))}*/
    return (
        <div className="container">

            <div className={classNames}>
                {
                }
            </div>
        </div>
    );
}
