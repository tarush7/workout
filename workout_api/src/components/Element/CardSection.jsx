import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { useContext } from 'react';
import { ValueContext } from "@/ValueContext";
import { useEffect } from "react";
import { Skeleton } from "@/components/ui/skeleton"
import { motion } from 'framer-motion';


function CardSection() {

    const { loading, error, data } = useContext(ValueContext);

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);

    useEffect(() => {
        if (error) {
            console.log(error);
        }
    }, [error]);


    if (!data) return (
        console.log("no data")
    )

    const renderCard = (item, index) => (
        <div className="flex flex-col items-center pb-8">
            <Card key={index} className="w-4/5 shadow-lg">
                <CardHeader className="text-2xl font-bold text-center bg-slate-400 rounded-t-lg ">
                    <CardTitle>{item.name || 'loading Name...'}</CardTitle>
                </CardHeader>
                <CardContent className=" p-3 bg-secondary">
                    <CardTitle className="p-2">Type</CardTitle>
                    <CardDescription className="px-2">{item.type || 'loading type...'}</CardDescription>
                </CardContent>
                <CardContent className=" p-3 bg-secondary">
                    <CardTitle className="p-2">Equipment</CardTitle>
                    <CardDescription className="px-2">{item.equipment || 'loading equipment....'}</CardDescription>
                </CardContent>
                <CardContent className=" p-3 bg-secondary">
                    <CardTitle className="p-2">Difficulty</CardTitle>
                    <CardDescription className="px-2">{item.difficulty || 'loading difficulty.....'}</CardDescription>
                </CardContent>
                <CardFooter className=" justify-items-center p-3 bg-secondary  rounded-b-lg">
                    <CardDescription className="px-2" >{item.instruction || 'loading instructions.....'}
                    </CardDescription>
                </CardFooter>
            </Card>
        </div>
    );


    if (loading) return (
        <section className="bg-slate-200 dark:bg-gray-900">
            {renderCard({})}
        </section>

    )



    return (
        <div>
            <section className="bg-slate-200 dark:bg-gray-900">
                {Array.isArray(data) && data.length > 0 ? data.map(renderCard) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 2, delay: 6 }}
                    >
                        {renderCard({})}
                    </motion.div>
                )}
            </section>
        </div>
    )
}

export default CardSection;

