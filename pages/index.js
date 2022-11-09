import Head from 'next/head';
import { BsFillMoonStarsFill} from 'react-icons/bs';
import { AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import Image from 'next/image';
import Profile from '../public/profile.png';
import Design from '../public/design.png'
import Code from '../public/code.png'
import Test from '../public/test.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Next Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className='text-xl font-burtons'>Oduola Ebenezer</h1>
            <ul className='flex items-center'>
              <li><BsFillMoonStarsFill className='cursor-pointer text-2xl'/></li>
              <li>
                <a className='bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8' href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10'>
            <h2 className='text-5xl py-2 text-teal-600 font-medium'>Oduola Ebenezer</h2>
            <h3 className='text-2xl py-2'>Frontend Developer and Software Tester</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>
              A trained, qualified and motivated Frontend Developer and QA Tester, with solid grounding in HTML, CSS, JavaScript, Reactjs, Nextjs, Tailwind, Manual Testing and Automation Testing. A fast learner and also possesses good problem solving and troubleshooting skills.
            </p>
          </div>
          <div className='text-5xl flex justify-center gap-16 py-3 text-gray-600'>
            <a href=""><AiFillTwitterCircle /></a>
            <a href=""><AiFillLinkedin /></a>
            <a href=""><AiFillGithub /></a>
          </div>
          <div className='relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden'>
            <Image src={Profile} layout="fill" objectFit='cover' />
          </div>
       </section>
         
       <section>
          <div>
            <h3 className='text-3xl py-1'>Services I Offer</h3>
            <p className='text-md py-2 leading-8 text-gray-80'>
            </p>
          </div>
          <div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
             <Image src={Design} width={100}  height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'></p>
              <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Corel Draw</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
             <Image src={Code} width={100}  height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'></p>
              <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Corel Draw</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
            <div className='text-center shadow-lg p-10 rounded-xl my-10'>
             <Image src={Test} width={100}  height={100} />
              <h3 className='text-lg font-medium pt-8 pb-2'>Beautiful Designs</h3>
              <p className='py-2'></p>
              <h4 className='py-4 text-teal-600'>Design Tools I Use</h4>
              <p className='text-gray-800 py-1'>Photoshop</p>
              <p className='text-gray-800 py-1'>Corel Draw</p>
              <p className='text-gray-800 py-1'>Figma</p>
            </div>
          </div>
       </section>
      </main>

      
    </div>
  )
}
