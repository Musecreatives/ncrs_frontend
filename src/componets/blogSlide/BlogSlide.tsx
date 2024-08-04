"use client"
import Link from "next/link"
import Image from "next/image"
import { RightArrow } from "../IconsPalette"
import {posts} from '../../../data'
import styles from './styles.module.css'
import BlogCard from "../blogCard/BlogCard"
import {motion} from "framer-motion"
import {useState, useEffect, useRef} from "react"


export default function BlogSlide(){

  const [width, setWidth] = useState(0)
  const cardsOuter = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    if (cardsOuter.current) {
      const scrollWidth = cardsOuter.current.scrollWidth;
      const offsetWidth = cardsOuter.current.offsetWidth;
      if (scrollWidth !== undefined && offsetWidth !== undefined) {
          setWidth(scrollWidth - offsetWidth);
      }
  }
  },[])

    return(
        <div className={styles.blog_post_slide}>
        <h1 className={styles.blog_post_slide_heading}>Blog Posts and Publications</h1>
        <h1 className={styles.web_blog_post_slide_heading}>Blog Posts</h1>
        <motion.div ref={cardsOuter} className={styles.blog_post_slide_cards_outer}>
          <motion.div drag="x" dragConstraints={{right:0, left:-width}} className={styles.blog_post_slide_cards}>
            {
              Array.isArray(posts) ? 
              posts.map((post, index) =>(
                <BlogCard
                key={index} 
                img={post.img} 
                heading={post.heading} 
                author={post.author} 
                date={post.date} 
                slug={post.slug} />
              )):
              <div></div>
            }
          </motion.div>
        </motion.div>
        
      </div>
    )
}