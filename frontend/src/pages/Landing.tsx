import { PromoCard } from "@/components/PromoCard";
import { Video } from "../components/Video";
import { FeatureCard } from "../components/FeatureCard";
import { Footer } from "@/components/Footer";
import Scroll1 from "./Scroll1";
import p4 from "../assets/p4.webp";
import p2 from "../assets/p2.webp";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
} from "../components/ui/carousel";

export const Landing = () => {
    return (
        <div className="bg-black min-h-screen py-10">

            {/* Video Carousel */}
            <div className="flex justify-center">
                <Carousel
                    className="w-full px-8"
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                >
                    <CarouselContent>
                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="GEMINI OMNI FLASH"
                                videoUrl="https://cdn.higgsfield.ai/card/ab3ecfdf-43b1-40e9-9408-2d47ad640c36.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="HIGGSFIELD SHORT STUDIO"
                                videoUrl="https://cdn.higgsfield.ai/card/447168a3-3ac0-470c-bedc-2ab74f96ffd1.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="HIGGSFIELD EXPLAINER"
                                videoUrl="https://cdn.higgsfield.ai/card/b18c39ef-ecde-4633-97aa-130767bae4de.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="NANO 2 BANANA LITE"
                                videoUrl="https://cdn.higgsfield.ai/card/371f85de-70cc-48bd-9226-73f69fedac57.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="SEDANCE 2.0 IN NATIVE 4K"
                                videoUrl="https://cdn.higgsfield.ai/card/6b6ca0a2-5f23-47b7-a405-b5f4c1acbb65.mp4"
                            />
                        </CarouselItem>

                        <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
                            <Video
                                title="THE TRAILER IS HERE WITH TRAVELLER"
                                videoUrl="https://cdn.higgsfield.ai/card/371f85de-70cc-48bd-9226-73f69fedac57.mp4"
                            />
                        </CarouselItem>
                    </CarouselContent>

                    <CarouselPrevious className="left-4" />
                    <CarouselNext className="right-4" />
                </Carousel>
            </div>


            <div className="grid grid-cols-6 gap-4 px-8 py-6 mt-8">
                <div className="col-span-4">
                    <PromoCard />
                </div>

                <div className="col-span-2 flex flex-col gap-4">
                    <div className="flex-1">
                        <FeatureCard
                            title="Create with Pollinations AI"
                            description="Your autonomous AI agent that turns ideas into action and gets tasks done for you."
                            image={p4}
                        />
                    </div>
                    <div className="flex-1">
                        <FeatureCard
                            title="Cloudinary"
                            description="Used Cloudinary to store avatar images in the cloud and save their URLs in the database."
                            image={p2}
                        />
                    </div>
                </div>
            </div>
            <Scroll1 />

            <Footer />
        </div>
    );
};