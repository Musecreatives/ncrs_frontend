"use client"

import styles from './styles.module.css'
import Image from 'next/image'
import {gallery} from '../../../data'
import { Cancel, Next, Prev } from '@/componets/IconsPalette';
import { useState, useEffect } from 'react';

interface GalleryProp {
    img: string,
    alt: string,
    index: number
}

interface GalleryCardProp{
    galleryState: Function,
    image: string,
    index: number
}

export default function Gallery(){
    const [imageArray, setImageArray] = useState<string[]>([])
    
    return(
        <main>
             <section className={styles.hero}>
                <div className={styles.hero_layer}></div>
                <div className={styles.hero_content}>
                    <p className={styles.heading_one}>Home / <span>Media</span></p>
                    <p className={styles.heading_two}>Our Visions, Mission and Our Team</p>
                    <div className={styles.hero_title_page}>
                        <div className={styles.title_cover}>
                            <p className={styles.title}>NATIONAL CENTRE FOR REMOTE SENSING</p>
                        </div>
                        <div className={styles.page_cover}>
                            <h1 className={styles.page}>Project Exhibition</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section className={styles.section_two}>
                <div className={styles.section_two_container}>
                    <h1>Gallery</h1>
                    <div className={styles.section_two_cards}>
                        {   
                         Array.isArray(gallery) ? 
                            gallery.map((card, index)=>(
                            <GalleryCard key={index} index={index} img={card} alt={card}/>
                            )):
                            <div></div>
                        }
                    </div>
                    
                </div>
            </section>
        </main>
    )
}

export function GalleryCard({img, alt, index}:GalleryProp){
    const [showCard, setShowCard] = useState(false)

    const showGallery = ()=>{
        setShowCard(true)
    }

    return (
        <>
        <div onClick={()=>showGallery()} className={styles.grid_card}>
            <Image src={img} alt={alt} className={styles.grid_card_img} fill/>
        </div>
        {
            showCard && <GalleryShowCard image={img} index={index} galleryState={setShowCard}/>
        }
        </>
    )
}

export function GalleryShowCard({image, index, galleryState}:GalleryCardProp){

    const [currentImg, setCurrentImg] = useState(image)
    let [currentValue, setCurrentValue] = useState(index)

    const showGallery = ()=>{
        galleryState(false)
    }

    const next = () => {
        setCurrentValue(prevValue => {
            const newValue = prevValue + 1;
            if (newValue < gallery.length) {
                setCurrentImg(gallery[newValue]);
                return newValue;
            } else {
                return prevValue;
            }
        });
    };
    
    const prev = () => {
        setCurrentValue(prevValue => {
            const newValue = prevValue - 1;
            if (newValue >= 0) {
                setCurrentImg(gallery[newValue]);
                return newValue;
            } else {
                return prevValue;
            }
        });
    };
    
    
    

    return(
        <main className={styles.gallery_card_cover}>
            <div className={styles.gallery_card_container}>
                    <div onClick={()=>showGallery()} className={styles.cancel}>
                        <Cancel iconStyle={styles.icon_cancel}/>
                    </div>
                <div className={styles.gallery_card}>
                    <div className={styles.gallery_card_banner_cover}>
                        <Image src={currentImg} alt="image" className={styles.gallery_card_banner} fill/>
                    </div>
                </div>
            <div className={styles.gallery_card_pagination}>
                <div onClick={()=>prev()}>
                    <Prev iconStyle={styles.icon_prev}/>
                </div>
                <div onClick={()=>next()}>
                    <Next iconStyle={styles.icon_next}/>
                </div>
            </div>
            </div>
        </main>
    )
}