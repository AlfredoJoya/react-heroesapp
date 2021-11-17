import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../../selectors/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ( { publisher }) => {

    const heroes = useMemo(() => getHeroesByPublisher( publisher ), [ publisher ]);
    //const heroes = getHeroesByPublisher( publisher );

    return (              
        <div className="row row-cols-1 row-cols-md-2 g-1 animate__animated animate__fadeInUp">
            {
                 heroes.map( hero => (
                    <HeroCard key={ hero.id} { ...hero } />
                ))
            }
        </div>
                       
        
    )
}
