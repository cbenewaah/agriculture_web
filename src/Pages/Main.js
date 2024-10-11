import React from 'react'
import Card from '../Components/Card'
import Card1  from '../Components/Card1'


function Main() {
    return (
        <div>
            <div className='flex flex-col my-20 mx-6'>
                <div className='text-customGreen2 font-medium'>
                    FROM OUR FARM, TO YOUR TABLE
                </div>
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <div className='my-4'>
                            <p className='font-bold text-6xl text-customGreen2'>Discover the</p>
                            <p className='font-bold text-6xl text-customGreen2'>Difference of Truly</p>
                            <p className='font-bold text-6xl text-customGreen2 '>Organic Vegetables</p>
                        </div>
                        <div className='my-4'>
                            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.</p>
                            <p> Velit officia consequat duis enim velit mollit. Exercitation veniam consequat </p>
                            <p> sunt nostrud amet.</p>
                        </div>
                    </div>

                    <div className='relative w-64 h-64 mx-20'>
                        <img className='absolute z-10 w-100p h-100p ' src='/pumpkin.png' alt='Pumpkin' />
                        <img className='absolute left-8 bottom-8 z-20 w-64 h-64' src='/Cabbage.webp' alt='Cabbage' />
                        <img className='absolute left-4 bottom-8 z-30 w-56 h-56' src='/tomato.png' alt='Tomato' />
                        <img className='absolute bottom-0 z-40 w-44 h-44' src='/garlic.png' alt='Garlic' />
                    </div>
                </div>
                <div className='flex flex-row my-6'>
                    <a className='border bg-customGreen1 rounded-xl px-5 py-2 font-semibold text-customGreen2' href='#our-harvest'>Discover our products</a>
                    <a className='mx-3 border bg-customorange rounded-xl px-5 py-2 font-semibold text-customGreen2 ' href='#'>Contact Us</a>
                </div>
            </div>
            <div className='bg-customGreen1 flex flex-row'>
                <div className='mx-9 my-12 '>
                    <video width='800' controls className='border border-black rounded-2xl h-100p w-90p '>
                        <source src='/video.mp4' type='video/mp4' />
                    </video>
                </div>
                <div className='my-10 mx-10'>
                    <div>
                        ABOUT US
                    </div>
                    <div>
                        <p className='font-bold text-customGreen2 text-5xl'>Meet the Minds</p>
                        <p className='font-bold text-customGreen2 text-5xl'>Behind Our</p>
                        <p className='font-bold text-customGreen2 text-5xl'>Modern Farm</p>
                    </div>
                    <div className='text-customGreen2'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <p>Suspendisse varius enim in eros elementum tristique. Duis </p>
                        <p>cursus, mi quis viverra ornare, eros dolor interdum nulla, ut </p>
                        <p>commodo diam libero vitae erat. Aenean faucibus nibh et justo </p>
                        <p>cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus </p>
                        <p>tristique posuere.</p>
                    </div>
                </div>
                <div> <img className='h-60 w-60' src='/pepper.png' alt='image of pepper' /> </div>
            </div>
            <div className='my-10'>
                <div className='text-customGreen2 font-semibold text-center my-5'> OUR STORY</div>
                <div className='text-5xl font-bold text-customGreen2 mx-72 text-center'> <p> Showing the seeds of an Organic</p>
                    <p className='mx-64'>Revolution</p>
                </div>

                <div className='flex justify-center items-center space-x-10'>
                    <div className="left-end">
                        <div className='relative'>
                            <img src='/old farm.webp' alt='image of the old farm' className='rounded-lg w-96 h-60 m-20 border border-green-900' />
                            <div className="absolute top-7 left-7 bg-green-800 text-white px-4 py-4 rounded-lg m-2 text-xl font-semibold">
                                <p>Our Farm 60</p>
                                <p>Years Ago</p>
                            </div>
                        </div>
                        <div className='mx-20 font-bold text-4xl text-customGreen2 -mt-12'>
                            <p>Rooted in Tradition:The</p>
                            <p>Early Years of Our Farm</p>
                        </div>
                        <div className='mx-20 my-4 text-customGreen2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Suspendisse varius enim in eros elementum tristique.</p>
                            <p>Duis cursus, mi quis viverra ornare, eros dolor interdum</p>
                            <p>nulla, ut commodo diam libero vitae erat.</p>
                        </div>

                    </div>
                    <div className="flex items-center justify-center">
                        <h3 className="bg-customGreen1 text-customGreen2 font-bold px-8 py-8 rounded-full text-2xl">
                            VS
                        </h3>
                    </div>
                    <div className="left-end">
                        <div className='relative'>
                            <img src='/old farm.webp' alt='image of the old farm' className='rounded-lg w-96 h-60 m-20 border border-green-900' />
                            <div className="absolute top-7 right-7 bg-green-800 text-white px-4 py-4 rounded-lg m-2 text-xl font-semibold">
                                <p>Our Farm</p>
                                <p>Today</p>
                            </div>
                        </div>
                        <div className='mx-20 font-bold text-4xl text-customGreen2 -mt-12'>
                            <p>Growing Together:</p>
                            <p>Evolution and Expansion</p>
                        </div>
                        <div className='mx-20 my-4 text-customGreen2'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p>Suspendisse varius enim in eros elementum tristique.</p>
                            <p>Duis cursus, mi quis viverra ornare, eros dolor interdum</p>
                            <p>nulla, ut commodo diam libero vitae erat.</p>
                        </div>

                    </div>

                </div>
                <div className='text-5xl font-bold text-customGreen2 flex justify-center my-10 '>
                    Our Numbers talk for themselves
                </div>
                <div className='flex flex-row justify-between px-8'>
                    <div className='relative'>
                        <img className='' src='' alt='' />
                        <div className='  bg-customGreen1 px-28 border border-customGreen py-3 rounded-2xl'>
                            <p className='font-bold text-6xl text-customGreen2'>1,000+</p>
                            <p className='text-customGreen2'>Acres cultivated</p>
                        </div>
                    </div>
                    <div className=' bg-customGreen1 px-28 border border-customGreen py-3 rounded-2xl'>
                        <p className='font-bold text-6xl text-customGreen2'>5,000+</p>
                        <p className='text-customGreen2'>Happy Customers</p>
                    </div>
                    <div className=' bg-customGreen1 px-28 border border-customGreen py-3 rounded-2xl'>
                        <p className='font-bold text-6xl text-customGreen2'>50+</p>
                        <p className='text-customGreen2'>Organic Products</p>
                    </div>
                </div>
            </div>

            <div className='bg-customfaint text-center my-10 '>
                <div className='text-customGreen2'> OUR HARVEST  </div>
                <div className='my-6'>
                    <p className='text-customGreen2 font-bold text-5xl'>Fresh, Nutritious, and 100%</p>
                    <p className='text-customGreen2 font-bold text-5xl'>Organic</p>
                </div>
                <div className='text-customGreen2 my-6'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis</p>
                    <p>cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                </div>
                <div className='grid grid-cols-3 gap-7 mx-10'>
                <Card
                   image={<img className=' rounded-2xl w-80 h-96' src='/f1.webp' alt=''/>} 
                   title='Fresh Tomatoes'
                   description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                   Velit officia consequat duis enim velit mollit. ' 
                />
                <Card
                   image={<img className='rounded-2xl w-80 h-96' src='/f2.webp' alt=''/>} 
                   title='Succulent Potatoes'
                   description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    Velit officia consequat duis enim velit mollit. ' 
                />
                <Card
                   image={<img className='border border-customGreen2 rounded-2xl w-80 h-96' src='/f3.webp' alt=''/>} 
                   title='Lush lettuce'
                   description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                   Velit officia consequat duis enim velit mollit. ' 
                />
                <Card
                   image={<img className='border border-customGreen2 rounded-2xl w-80 h-96' src='/f4.webp' alt=''/>} 
                   title='Enchanting Eggplant'
                   description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                   Velit officia consequat duis enim velit mollit. ' 
                />
                <Card
                   image={<img className='border border-customGreen2 rounded-2xl w-80 h-96' src='/f5.webp' alt=''/>} 
                   title='Crunchy Cucumbers'
                   description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                   Velit officia consequat duis enim velit mollit. ' 
                />
                <Card
                   image={<img className='border border-customGreen2 rounded-2xl w-80 h-96' src='/f6.webp' alt=''/>} 
                   title='Bulgarian Pepper'
                   description='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                   Velit officia consequat duis enim velit mollit.' 
                />
                </div>
            </div>

            <div>
                <div className='flex flex-row justify-between'>
                    <div className='border border-customGreen2 py-5 px-24 rounded-2xl m-5'>
                        <div>
                        <p className='text-customGreen2 flex justify-center font-semibold'>BENEFITS</p>
                        <p className='text-customGreen2 font-bold text-4xl'>The Benefits of Our </p>
                        <p className='text-customGreen2 font-bold text-4xl mb-12'>Organic Bounty</p>
                    </div>
                    
                    
                    <div className='grid grid-cols-3 gap-4 '>
                        <div>
                            <img src='/I1.png' alt='' className='w-16 h-16'/>
                            <h3>Pure Flavour</h3>
                        </div>
                        <div>
                            <img src='/I2.png' alt='' className='w-16 h-16'/>
                            <h3>Nutrient-Rich</h3>
                        </div>
                        <div>
                            <img src='/I3.png' alt='' className='w-16 h-16'/>
                            <h3>Chemical-Rich</h3>
                        </div>
                        <div>
                            <img src='/I4.png' alt='' className='w-16 h-16'/>
                            <h3>Eco-Friendly</h3>
                        </div>
                        <div>
                            <img src='/I5.png' alt='' className='w-16 h-16'/>
                            <h3>Locally Sourced</h3>
                        </div>
                        <div>
                            <img src='/I6.png' alt='' className='w-16 h-16'/>
                            <h3>Great Quality</h3>
                        </div>
                    </div>
                    </div>
                    <div>
                    <img src='/female.webp' alt='' className='w-75p h-96 rounded-2xl m-5 float-right mr-16'/>
                    </div>
                
                </div>
               
            </div>
            <div className='relative mt-20'>
                <video height='500' controls>
                    <source src='/video2.mp4' type='video/mp4'/>
                </video>
                <div className='border bg-customGreen2 border-customGreen2 p-20 absolute top-20 left-10 rounded-2xl float-left '>
                    <div className='text-white font-semibold'>INTERESTED IN OUR PRODUCTS?</div>
                    <div className='text-white font-bold text-6xl m-4'>Reach to us!</div>
                    <div className='text-white m-10'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse</p>
                        <p>varius enim in eros elementum tristique. Duis cursus, mi quis viverra</p>
                        <p>ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                    </div>
                    <div className=' bg-customGreen1 float-left border text-customGreen2 py-4 px-5 ml-4 font-semibold'>
                        <a className='' href='#Footer'> Contact Us</a>
                    </div>
                    
                </div>
            </div>

            <div>
                <div className='flex justify-center text-customGreen2 mt-20 font-semibold'>
                    REVIEWS
                </div>
                <div className='flex justify-center text-5xl text-customGreen2 font-bold mb-12'>
                    <div>Hear What Our Customers Have</div>
                    <div className='mx-4'>to Say</div>
                </div>
                <div className='flex flex-row mb-20'>
                    <Card1
                     description='“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                     Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”'
                     picture={<img className='w-16 h-16 rounded-full border' src='/samuel.webp' alt=''/>}
                     Name='Samuel Greene'
                     portfolio='Health-conscious Parent'
                    />
                     <Card1
                     description='“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                     Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”'
                     picture={<img className='w-16 h-16 rounded-full border' src='/david.webp' alt=''/>}
                     Name='David Fletcher'
                     portfolio='Organic Food Enthusiast'
                    />
                     <Card1
                     description='“Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. 
                     Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.”'
                     picture={<img className='w-16 h-16 rounded-full border' src='/sophia.webp' alt=''/>}
                     Name='Sophia Barnes'
                     portfolio='Professional Chef and Culinary Expert'
                    />


                </div>
            </div>
        </div>
    )
}

export default Main
