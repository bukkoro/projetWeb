import React, { useState, useEffect }from 'react';
import axios from 'axios';
import ImageDisplay from './imageDisplay'
import qs from 'qs';


async function uploadImage(data)

{

    return axios.post('http://localhost:8080/back/addPost', 
    
    {data: qs.stringify(data)},
    {
        'Content-Type': 'application/x-www-form-urlencoded'
    })
   
        .then(res =>{
            return res;
        })
}


export default  function UploadImageForm()
{
    const [email, setEmail] = useState();
    const [path, setPath] = useState();
    const [ImageSelected, setImageSelected] = useState();
    const [Legend, setLegend] = useState();
    //const [BroadcastList,SetBroadcastList] = useState([]);
    //const [BroadcastListName,setBroadcastListName] = useState();
    const [Tags, setTags] = useState();
  

    const handleSubmit = async e => {
        e.preventDefault();
        const data = new FormData();
        /*for( const i in BroadcastList)
        {
            if(BroadcastListName === BroadcastList[i].name)
            {
                data.append('id_broadcast_list',BroadcastList[i].id);
                console.log(BroadcastList[i])
            }
        }*/
        data.append('email',email)
        data.append('image', ImageSelected);
        data.append('legend',Legend);
        data.append('tags',Tags)
        console.log(data)
        await uploadImage(data);
    }
    const legendChangedHandler = async e =>{
    setLegend(e.target.value)
    }
    const fileChangedHandler = e => {
         setImageSelected(e.target.files[0])
         let reader = new FileReader();
         reader.onloadend = () => {
                setPath(reader.result);
         }
         reader.readAsDataURL(e.target.files[0])
     }
    /*const userListChangeHandler = e => {
    setBroadcastListName(e.target.value)
    }*/

    const tagsChangedHandler = e => {
        setTags(e.target.value)
    }

    let $imagePreview = (<div className="previewText image-container">Please select an Image file for Display</div>);
    if (path) {
        $imagePreview = (
        <div className="image-container" >

            <ImageDisplay src={path} legend={Legend} note={5}  tagsList={Tags} preview={"1"}/>
        </div>);
    }
    return (
        
        <div className="grid-container">
            "ceci est un test pour l'upload d'image"
        <form onSubmit={handleSubmit}>
           
                <div className="grid-x grid-padding-x">
                    <div className="medium-6 cell">
                        
                        <label>Image to send
                            <input type="hidden" name="MAX_FILE_SIZE" value="15000000" />
                            <input type="file"  onChange={fileChangedHandler} required/>
                        </label>
                        <label> légende de la photo
                             <input type="text" onChange={legendChangedHandler} required/>
                        </label>
                        <label> Adresse email
                             <input id="login_email" type="email" className="input"  onChange={(e) => setEmail(e.target.value)} required />
                        </label>
                        <label> tags de la photo
                            <input type="text" onChange={tagsChangedHandler} required/>
                        </label>
                        <input type="submit" value="enregistrer"/>
                    </div>
                </div>
        </form>
            {$imagePreview}
        </div>

    );
}