import React from 'react'
import MagicButton from './ui/MagicButton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
        <div className="w-full absolute left-0 -bottom-72 min-h-96">
            <img src="/footer-grid.svg" alt="grid" className="w-full h-full opacity-50"/>
        </div>

        <div className="flex flex-col items-center">
            <h1 className="heading lg:max-w-[45vw]">
            Prêt à faire passer <span className="text-purple">votre</span> présence numérique au niveau supérieur ?
            </h1>

            <p className="text-white-200 md:mt-10 my-5 text-center">
                Contactez-moi aujourd&apos;hui et discutons de la manière dont je peux vous aider à atteindre vos objectifs.
            </p>

            <a href="mailto:victordiez1@gmail.com">
                <MagicButton title="Contactez moi" icon={<FaLocationArrow/>} position="right"/>
            </a>
        </div>

        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
            <p className="md:text-base text-sm md:font-normal font-light mb-6">
                Victor Diez 
            </p>

            <div className="flex items-center md:gap-3 gap-6">
                {socialMedia.map((profile) => (
                    <a href={profile.href} key={profile.id}>
                    <div key={profile.id} className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300">
                        <img src={profile.img} alt={profile.img} width={20} height={20} />
                    </div>
                    </a>
                ))}
            </div>
        </div>
    </footer>
  )
}

export default Footer