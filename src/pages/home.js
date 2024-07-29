import React, { useEffect, useState } from "react";
import '../css/home.css';
import Layout from "../Component/layout";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";


const styles = {

  section: {
    background: "#fff",
    
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
    width: "80%",
    maxWidth: "800px",
    textAlign: "left",
  },
}

export default function Home() {


  const [isMobile ,setIsMobile]= useState(useMediaQuery('(max-width:600px)'));
  var navigate=useNavigate();


  const [articles,setarticles]=useState([{description:`Embracing sustainable living is not just a trend—it's a necessary shift towards preserving our planet for future generations. By making conscious choices and adopting eco-friendly habits, we can reduce our environmental impact and contribute to a healthier Earth. Here’s a comprehensive guide to help you incorporate sustainable living into your daily life:

<h3>1. Reduce, Reuse, Recycle</h3>
<MAKEIMG>https://solarschools.net/build/img/learn/sustainability/reduce-reuse-recycle//3-rs-diagram_400_resize_q95.jpg</MAKEIMG>
The cornerstone of sustainable living is the mantra: Reduce, Reuse, Recycle. Start by reducing your waste. This means buying only what you need and opting for products with minimal packaging. Reuse items whenever possible—think cloth bags, reusable water bottles, and containers. And finally, recycle correctly. Make sure to sort your waste and follow local recycling guidelines to ensure materials are properly processed.

<h3>2. Conserve Energy</h3>
Energy conservation is crucial for reducing your carbon footprint. Switch to LED bulbs, which are more energy-efficient and last longer than traditional incandescent bulbs. Remember to unplug devices when they’re not in use; many electronics continue to consume power even when turned off. Opt for energy-efficient appliances that have the ENERGY STAR rating, as they use less energy and are better for the environment.

<h3>3. Choose Sustainable Transportation</h3>
Your mode of transportation can significantly impact the environment. For short distances, consider walking or biking—it's healthier for you and the planet. For longer journeys, use public transportation like buses, trains, or subways to reduce the number of cars on the road. When driving is necessary, carpool with others to share the ride and cut down on emissions.

<h3>4. Support Eco-Friendly Products</h3>
When shopping, buy local to support small businesses and reduce the carbon footprint associated with shipping. Choose organic products that are produced without harmful chemicals and pesticides. Also, look for items made from sustainable materials like recycled paper, bamboo, or responsibly sourced wood.

<h3>5. Save Water</h3>
Water conservation is another key aspect of sustainable living. Fix any leaky faucets or toilets to prevent unnecessary water waste. Take shorter showers and consider installing a water-saving showerhead. For cleaning outdoor areas, use a broom instead of a hose to save water.
`,
    title:"Sustainable Living: Tips and Tricks for a Greener Lifestyle", 
    image:"https://cdn-kabof.nitrocdn.com/nfjHFOYSVknMSLxSPIZUhvuJiKcRMGGc/assets/images/optimized/rev-bd01adb/advertisingweek.com/wp-content/uploads/2022/03/169environment-concept-globe-glass-in-green-forest-with-sunlight-picture-id1309463809.jpg",
    date:"27/03/2017"},


    {description:`Mumbai, often referred to as the city of dreams, is a bustling metropolis that encapsulates the essence of India’s diversity, dynamism, and ambition. It’s a city that never sleeps, where every street corner, market, and building tells a story. Whether you’re a first-time visitor or a seasoned traveler, Mumbai offers an array of experiences that make it a unique destination. Here’s a deep dive into what makes Mumbai truly unforgettable.

<h2>The Heartbeat of Mumbai: An Overview</h2>
Mumbai, formerly known as Bombay, is the capital of the Indian state of Maharashtra and is the financial, commercial, and entertainment capital of India. The city is a melting pot of cultures, languages, and cuisines, and its skyline is a mix of modern skyscrapers and historical landmarks. It’s a place where tradition meets modernity, and chaos blends seamlessly with order.

<h2>Historical Landmarks: A Glimpse into Mumbai’s Past</h2>
<h3>1. The Gateway of India:</h3>
No visit to Mumbai is complete without a stop at the Gateway of India. This iconic structure, built during the British Raj, overlooks the Arabian Sea and was originally constructed to commemorate the visit of King George V and Queen Mary to India in 1911. Today, it stands as a symbol of Mumbai’s rich history and is a popular spot for tourists and locals alike.
<MAKEVIDEO>https://www.youtube.com/watch?v=e9HiA6U1b-8</MAKEVIDEO>
<h3>2. Chhatrapati Shivaji Maharaj Terminus (CST):</h3>
A UNESCO World Heritage Site, CST is a stunning example of Victorian Gothic architecture. This bustling railway station is not only a vital transportation hub but also a marvel of design and engineering.
<MAKEVIDEO>https://www.youtube.com/watch?v=LIfeKVx3U20&t=42s</MAKEVIDEO>
<h3>3. Elephanta Caves:</h3>
A short ferry ride from the city takes you to the Elephanta Caves, a network of ancient rock-cut temples dedicated to Hindu gods. The caves are renowned for their intricate sculptures and provide a fascinating glimpse into India’s religious history.
<MAKEVIDEO>https://www.youtube.com/watch?v=E23s8MmSjuQ</MAKEVIDEO>
`
      ,title:" Exploring the Vibrant Tapestry of Mumbai: A City Like No Other", 
      image:"https://www.mistay.in/travel-blog/content/images/2021/07/Roam-around-top-7-historical-monuments-in-Mumbai-I-MiStay.jpeg",
      date:"07/08/2018"},


      {description:`In today’s fast-paced world, finding moments of calm can be challenging. Mindful living is a practice that helps us navigate daily stress and embrace a more peaceful existence. By incorporating mindfulness techniques into your routine, you can enhance your mental well-being and enjoy a more balanced life. Here’s a guide to integrating mindfulness into your daily activities:

<h3>1. Start with Breathing Exercises</h3>
Breathing exercises are a cornerstone of mindfulness. Begin your day with a few minutes of deep, intentional breathing. This practice helps center your thoughts and reduces anxiety. Try focusing on your breath for 5-10 minutes each morning, and gradually increase the time as you become more comfortable.
<h3>2. Practice Mindful Eating</h3>
Mindful eating involves paying full attention to the experience of eating. Take time to savor each bite, notice the flavors, and appreciate the nourishment. This practice not only enhances your enjoyment of food but also helps in recognizing hunger cues and avoiding overeating.
<h3>3. Incorporate Mindfulness into Daily Tasks</h3>
Bring mindfulness to everyday activities like walking, cleaning, or even commuting. Focus on the sensations, sounds, and smells around you. By being fully present, you can transform routine tasks into moments of tranquility.
<h3>4. Establish a Mindfulness Routine</h3>
Set aside specific times each day for mindfulness practices. Whether it's a short meditation session, mindful journaling, or a quiet walk, having a routine helps reinforce the habit and makes it easier to integrate into your life.
<h3>5. Use Mindfulness Apps</h3>
Leverage technology to support your mindfulness journey. There are several apps available that offer guided meditations, breathing exercises, and mindfulness reminders. Explore options like Headspace, Calm, or Insight Timer to find one that suits your needs.`
        ,title:" The Art of Mindful Living: How to Cultivate Peace in Your Daily Routine", 
        image:"https://media.licdn.com/dms/image/D4D12AQEewCnBNtYRjg/article-cover_image-shrink_720_1280/0/1696413232408?e=2147483647&v=beta&t=dr_Kdfe-_Fryqr8bSUAyC4uy7bgPWo3Jn8Z5T57Q2pM",
        date:"16/09/2018"},

        

        {description:`Creating a home garden is a rewarding way to grow your own food, beautify your space, and connect with nature. Whether you have a large backyard or just a small balcony, gardening can be adapted to fit your living situation. Here’s a step-by-step guide to help you get started on your gardening journey:

<h3>1. Choose the Right Location</h3>
Assess your space to determine the best location for your garden. Most plants require ample sunlight, so choose a spot that gets at least 6-8 hours of direct sunlight each day. Consider factors such as soil quality and access to water when selecting your location.
<h3>2. Plan Your Garden Layout</h3>
Decide what you want to grow and plan your garden layout accordingly. Whether you’re growing vegetables, herbs, or flowers, ensure that you leave enough space between plants for them to thrive. Consider using raised beds or container gardens if you have limited space.
<h3>3. Prepare the Soil</h3>
Good soil is essential for a successful garden. Start by testing your soil to check its pH and nutrient levels. Amend the soil with organic matter such as compost to improve its fertility and structure. Ensure proper drainage to prevent waterlogging.
<h3>4. Select the Right Plants</h3>
Choose plants that are suited to your climate and growing conditions. Consider starting with easy-to-grow varieties like tomatoes, lettuce, or marigolds if you’re new to gardening. Purchase seeds or seedlings from a reputable source and follow planting instructions.
<h3>5. Maintain Your Garden</h3>
Regular maintenance is key to a thriving garden. Water your plants consistently, weed regularly, and provide necessary nutrients through fertilization. Keep an eye out for pests and diseases, and take action to address any issues promptly.
<h3>6. Harvest and Enjoy</h3>
Harvest your crops when they are ripe for the best flavor and quality. Enjoy the fruits of your labor by incorporating fresh produce into your meals. Gardening can be a fulfilling and enjoyable hobby that provides both physical and mental benefits.`
          ,title:"The Ultimate Guide to Starting a Home Garden: From Seed to Harvest", 
          image:"https://www.gardeners.com/globalassets/articles/gardening/2022content/5062-tomato-seedlings.jpg",
          date:"07/09/2023"}
  ])
  const [articlesDesign,setarticlesDesign]=useState([])
  const [homedesign,setHomeDesign]=useState(<></>)


  const truncateText = async (description, limit) => {
    let updatedDescription = description.replace(/<MAKELINK>(.*?)<\/MAKELINK>/g, '');
    updatedDescription = updatedDescription.replace(/<MAKEIMG>(.*?)<\/MAKEIMG>/g, '');
    updatedDescription = updatedDescription.replace(/<MAKEVIDEO>(.*?)<\/MAKEVIDEO>/g, '');
    
     updatedDescription = updatedDescription.replace(/<h1>(.*?)<\/h1>/g, '');
     updatedDescription = updatedDescription.replace(/<h2>(.*?)<\/h2>/g, '');
     updatedDescription = updatedDescription.replace(/<h3>(.*?)<\/h3>/g, '');

    if (updatedDescription.length > limit) {
        return updatedDescription.substring(0, limit) + "...";
    }
    return updatedDescription;
  }

  const handleBlogClick = (data) => {
    navigate("/blog", { state: { ...data } });
};

useEffect(() => {
    const generateArticles = async () => {
       
        const articleElements = await Promise.all(articles.map(async (data) => (
            <li
                key={data.title}
                style={{ display: "flex", width: "100%",maxHeight:"195px", boxShadow: "rgb(20 27 47 / 60%) 0px 0px 10px" }}
                onClick={() => handleBlogClick(data)}
            >
                <div style={{ width: "50%", padding: "13px" }}>
                    <h3>{data.title}</h3>
                    <p style={{fontSize:"medium"}}>{await truncateText(data.description, 40)}</p>
                    <p style={{fontSize:"small"}}>{data.date}</p>
                </div>
                <div style={{ width: "50%" }}>
                    <img width={"100%"} height={"100%"} src={data.image} alt={data.title} />
                </div>
            </li>
        )));

        setHomeDesign(
            <>
                <h2 style={{ color: "white", backgroundColor: "#828282", padding: 0, margin: 0, textAlign: "center", borderTopRightRadius: "8px", borderTopLeftRadius: "8px" }}>
                    Articles
                </h2>
                <p style={{ paddingTop: "20px", paddingLeft: "10px", paddingRight: "10px", margin: "10px 0" }}>
                    Check out my latest articles.
                </p>
                <ul style={{ paddingTop: "0px", paddingLeft: "10px", paddingRight: "10px", margin: "10px 0", display: "flex", gap: "20px", flexDirection: "column" }}>
                    {articleElements}
                </ul>
            </>
        );
    };

    generateArticles();
}, [articles, navigate]);


 


  return (
   <Layout children={homedesign} page={"HOME"}/>) 
    
  };

