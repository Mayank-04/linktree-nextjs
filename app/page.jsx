import Image from "next/image"
import data from "../data.json"
import styles from "../styles/globals.css"


const LinkedInIcon = () => {
  return (
    <svg className="ml-14 mt-[2px] invert hover:scale-105 transition-all" role="img" width={34} height={34} viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg"><title>LinkedIn</title><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )
}
// 
const GithubIcon = () => {
  return (
    <svg className="invert hover:scale-105 transition-all" xmlns="http://www.w3.org/2000/svg" width={90} height={90} viewBox="0 0 80 80">
      <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.6,5,2.5,9.3,6.9,10.7v-2.3c0,0-0.4,0.1-0.9,0.1c-1.4,0-2-1.2-2.1-1.9 c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1c0.4,0,0.7-0.1,0.9-0.2 c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6c0,0,1.4,0,2.8,1.3 C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4c0.7,0.8,1.2,1.8,1.2,3 c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v3.3c4.1-1.3,7-5.1,7-9.5C22,6.1,16.9,1.4,10.9,2.1z"></path>
    </svg>
  )
}

const LinkCard = ({ href, title, image }) => {
  return (
    <a href={href} className="flex items-center p-4 rounded-full hover:scale-105 transition-all mb-4 border bg-gray-100 w-[50%] ">
      <div className="flex text-center w-full">
        <Image
          src={image}
          width={34}
          height={24}
          alt={title}
        />
        <h2 className="font-semibold text-lg text-center w-full text-gray-700">{title}</h2>
      </div>
    </a>
  )
}

const Home = () => {
  return (
    <div className="flex flex-col items-center mt-16">
      <Image
        className="rounded-full"
        src={data.image}
        alt="avatar"
        width={88}
        height={88}
      />
      <h1 className="text-xl font-bold mt-4 mb-8 text-white">{data.name}</h1>
      {data.links.map((link) => (
        <LinkCard key={link.href} {...link} />
      ))}
      <div className="flex justify-center gap-2">
        {data.socials.map((social) => {
          if (social.href.includes("linkedin")) {
            return <LinkedInIcon />
          }
          if (social.href.includes("github")) {
            return <GithubIcon />
          }
        })}
      </div>

    </div>
  )
}

export default Home
