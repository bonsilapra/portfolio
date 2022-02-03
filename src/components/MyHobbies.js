import React from 'react';
import './Commons.css';
import './MyHobbies.css';
import ScrollButtons from './ScrollButtons.js';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import hobby1 from '../images/photos/hobby1.jpg';
import hobby2 from '../images/photos/hobby2.jpg';
import hobby3 from '../images/photos/hobby3.jpg'


function MyHobbies() {

    const photos = [
        {original: hobby1}, 
        {original: hobby2}, 
        {original: hobby3}
    ]

    return (
        <div className='hobbies-page-container'>
            <div className='title light'>
                <h1>My hobbies</h1>
            </div>
            <div className='hobbies-page-content'>
                <div className='hobbies-img-container'>
                <div className='image-gallery'>
                        <ImageGallery 
                            items={photos} 
                            showBullets={true}
                        />
                    </div>
                </div>
                <div className='hobbies-text-container'>
                    <h2>Mountains</h2>
                    <p>For a vacation or a long weekend, I choose a trip to the mountains. This is my favorite activity, so I try to go as often as possible, regardless of the season. My best-loved destination are Tatra Mountains, but my goal is to visit all mountain ranges in Poland.</p>
                    <h2>Roller-skating</h2>
                    <p>When the weather is nice, I like to go roller-skating or cycling. You can often meet me on Wartostrada :&#41; Whenever there is an opportunity, I try to participate in various events related to roller skating, e.g. Night Skating in Poznań. </p>
                    <h2>Handciraft</h2>
                    <p>I am a very creative person, so I need to create. In my spare time, I really like to crochet amigurumi. I also love to knit or crochet shawls that later become gifts for my family and friends. I am currently learning to use a sewing machine to be able to sew clothes according to my own design in the future.</p>
                </div>
            </div>
            <ScrollButtons previous='skills' next='dogs' />
        </div>
    )
}
export default MyHobbies;
