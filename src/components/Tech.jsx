import {animate, motion, transform} from "framer-motion";
import { FaNodeJs } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { DiBootstrap } from "react-icons/di";
import { DiPhp } from "react-icons/di";
import { DiAndroid } from "react-icons/di";
import { DiUnitySmall } from "react-icons/di";


const iconAnim=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration:duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        }
    }
})
const Tech = () => {
  return (
    <div className="border-b border-neutral-600 pb-10">
      <motion.h2 
      whileInView={{opacity:1, y:0}}
      initial={{y:-100,opacity:0}}
      transition={{duration:1}}
      className="my-20  text-center text-4xl">
        Tech in Use
        </motion.h2>
<div className="flex flex-wrap items-center justify-center gap-4">
        <motion.div
        variants={iconAnim(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-700 p-4">
        <FaHtml5 className="text-4xl text-amber-500"></FaHtml5>   
        </motion.div>

        <motion.div
        variants={iconAnim(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-700 p-4">
        <DiPhp className="text-4xl text-blue-900"></DiPhp>
        </motion.div>
        
         <motion.div
        variants={iconAnim(3.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-700 p-4">
        <DiBootstrap className="text-4xl text-purple-600"></DiBootstrap>
        </motion.div>
        <motion.div
        variants={iconAnim(4)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-700 p-4">
        <FaLaravel className="text-4xl text-red-600"></FaLaravel>
        </motion.div>
        <motion.div
        variants={iconAnim(2.5)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-700 p-4">
        <DiAndroid className="text-4xl text-green-500"></DiAndroid>
        </motion.div>
        
        <motion.div
        variants={iconAnim(3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-700 p-4">
        <DiUnitySmall className="text-4xl text-slate-200"></DiUnitySmall>
        </motion.div>
        
        <motion.div
        variants={iconAnim(2.3)}
        initial="initial"
        animate="animate"
        className="rounded-2xl border-2 border-neutral-700 p-4">
        <FaNodeJs className="text-4xl text-cyan-400"></FaNodeJs>
        </motion.div>
        </div>
    </div>
  )
}

export default Tech