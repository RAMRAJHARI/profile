import React from 'react';
import { useState } from 'react';
import '../PoemCard/poemCard.scss';

const PoemCard = () =>{
    const [expandedPoem, setExpandedPoem] = useState(null);
    const poems = [
        {id:1,
         title: "Fading Dreams",
         content: `Suddenly, I fell into a dark abyss,
Where soul and body were torn apart.
Stars shimmered high above the night,
As tears welled up within my heart.

I floated like a fallen leaf,
That drifts without a last goodbye,
Caught between the pull of grief
And the endless stretch of sky.

Yet in the eyes of darkness, there came a light,
Leading me towards the Christmas night.
On mountain heights, I touched the sky,
And on river’s flow, I drifted by.

The wind carried me on a journey free,
Through its whispers, I sailed the sea.
After all, it was a simple dream,
In a world both calm and gleam.`,
         type:'dreamy'
        },
        {
            id: 2,
            title: "Hues of Princess",
            content: `She was a princess yearning to fly,
Locked in a cage of beasts in the heart.
Anxiety and tears her constant friends, 
Smashed like sugar glass, waiting for wine to mend.

In the hues of love, she lost the battle,
Gashed with a sabre, wounded and rattled.
Fought for breath in a fated fray,
Hush of wind, gliding the scars that clash.
Tears faded in the blaze of sun.

Melted memories, shadows on the run,
Breaking the cage,reaches light,
Embracing the blue that blanket crown.
She is a princess , soaring among the stars.`,
            type:'princess'
        }
    ]

    return(
      <section className='featured' id='featured-works'>
        <div className='featured__heading'>
            <h1>Featured Works</h1>
        </div>
        <div className='poems'>
            {poems.map((poem)=>(
                <div key={poem.id} className='poem-card'>
                    <h3 className='poem-title'>{poem.title}</h3>
                    <p className='poem-content'>{poem.content.length >100 ? poem.content.slice(0,100) + '...' : poem.content}</p>
                    {poem.content.length > 100 && (
                    <button className='read-more' onClick={()=>setExpandedPoem(poem)}>Read More</button>    
                )}
                </div>
            ))}
            </div>
            {expandedPoem && (
                <div className='modal'>
                    <div className='modal__content'>
                        <h2>{expandedPoem.title}</h2>
                        <p>{expandedPoem.content}</p>
                        <button className='modal__close' onClick={()=>setExpandedPoem(null)}>Close</button>
                    </div>
                </div>
            )}
      </section>
    )
}

export default PoemCard;