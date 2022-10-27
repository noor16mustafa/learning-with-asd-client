import React from 'react';
import imgdb from '../assets/images.jpg';
import image2 from '../assets/images2.jpg';
import image3 from '../assets/images3.jpg';

const FAQ = () => {
    return (
        <div className='w-4/5 m-auto mt-10'>
            <h2 className='text-4xl font-bold text-yellow-500 text-center mt-20 mb-20'>Frequently Asked Questions</h2>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-14">
                <figure><img className='h-full w-80' src={imgdb} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> WHAT ARE THE SYMPTOMS OF AUTISM SPECTRUM DISORDERS?</h2>
                    <p>Answer: Symptoms/behaviors of ASDs can range from mild to severe, and may seem to appear gradually or suddenly. Atypical development may be observed from birth, or more commonly, become noticeable during the 12- to 36-month period. Symptoms include:
                        1. Social Deficits
                        2. Communication Difficulties
                        3. Repetitive Behaviors
                        4. Sensory Difficulties
                        5. Unusual Abilities
                    </p>

                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-14">
                <figure><img className='h-full w-80' src={image2} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> WHO DEVELOPS AUTISM SPECTRUM DISORDERS (ASDS)?</h2>
                    <p>Answer: ASDs are usually evident by the age of 3, though diagnosis may be made as early as 12 to 18 months, and as late as 4 to 6 years (or later). According to the Center for Disease Control (CDC), about 1 in 59 children have an autism spectrum disorder. ASDs are three to four times more common in boys than in girls. However, girls with these disorders tend to have more severe symptoms and lower intelligence. Some children will need ongoing supervision, while others, with the right support, may pursue higher education and fulfilling jobs. These disorders affect people of all racial, ethnic and socioeconomic groups.
                    </p>

                </div>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl mb-14">
                <figure><img className='h-full w-80' src={image3} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title"> HOW ARE ASDS DIAGNOSED?</h2>
                    <p>Answer: To date, no biological diagnostic tests exist that detect autism. But scientists are hopeful that advanced imaging techniques and differences in blood levels of proteins in autistic versus normal children may have implications for diagnosis. Already, improved diagnostic procedures have allowed clinicians to diagnose children at a younger age.

                        Formal diagnosis involves parental input and structured and systematic screening instruments, such as the Modified Checklist for Autism in Toddlers (M-CHAT) and the Autism Behavioral Checklist (ABC) for older children. The Childhood Autism Rating Scale (CARS) and the Autism Diagnostic Inventory-Revised (ADI-R) are used, as well. These tools measure the prevalence of symptoms. Symptoms may be present from birth, or may occur after months of normal development. However, no two children with these disorders behave the same way. Children as young as 18 months may be diagnosed, but have different clinical features than an older child with autism.
                    </p>

                </div>
            </div>
        </div>
    );
};

export default FAQ;