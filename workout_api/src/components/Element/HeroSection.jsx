import React from "react";
import { motion } from 'framer-motion';

function MyHeroSection() {
  return (
    <div>

      <section className=" pb-5 bg-slate-200 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center pt-10 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-64  h-3/5">
          <motion.p
            className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <h1 className="mb-4  text-center text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Unlock your potential with our app!</h1>
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 2 }}
          >
            <p className="mb-14 text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400">Revamp your fitness with our app, packed with exercise data. <span className="font-semibold text-gray-900 dark:text-white">Hit search, see the magic!.</span></p>
          </motion.div>

          <motion.p
            className="text-lg text-center font-normal text-gray-500 lg:text-xl dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 3 }}
          >
            <p className="mb-14 text-center text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400"><span className="font-semibold text-gray-900 dark:text-white">Movement</span> This value can be partial (e.g. press will match Dumbbell Bench Press)</p>
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 4 }}
          >
            <p className="mb-4 text-center text-lg font-normal text-gray-500 "><span className="font-semibold  text-lg text-gray-900 dark:text-white">Muscle</span> group targeted by the exercise.<span className="font-semibold text-gray-900 dark:text-white" >  Possible values are :</span></p>
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 5 }}
          >
            <ul className="flex flex-wrap mb-5 items-center justify-center text-gray-900 dark:text-white">
              <li>
                <a href="#" className="me-4 hover:underline md:me-6 ">abdominals</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">abductors</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6 ">adductors</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">biceps</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">calves</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">chest</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">forearms</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">glutes</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">hamstrings</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">lats</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">lower_back</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">middle_back</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">neck</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">quadriceps</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">traps</a>
              </li>
              <li>
                <a href="#" className="me-4 hover:underline md:me-6">triceps</a>
              </li>
            </ul>
          </motion.p>
        </div>
      </section>
    </div>
  )
}
export default MyHeroSection;