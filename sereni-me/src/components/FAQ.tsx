import React from "react";
import Container from "@/components/Container";
import {Disclosure} from "@headlessui/react";

const Faq = () => {
	return (
		<Container className="!p-0">
			<div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
				{faqdata.map((item, index) => (
					<div key={item.question} className="mb-5">
						<Disclosure>
							{({open}) => (
								<>
									<Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
										<span>{item.question}</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className={`${
												open ? "" : "transform rotate-180"
											} w-5 h-5 text-indigo-500`}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4.5 15.75l7.5-7.5 7.5 7.5"
											/>
										</svg>
									</Disclosure.Button>
									<Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
										<p className="whitespace-break-spaces">{item.answer}</p>
									</Disclosure.Panel>
								</>
							)}
						</Disclosure>
					</div>
				))}
			</div>
		</Container>
	);
};

const faqdata = [
	{
		question: "What is meditation?",
		answer: `   Meditation is the practice of allowing thoughts to come and go, as you learn to recognize and release them without judgment. Studies show that a long-term meditation practice can actually help shift your nervous system out of fight or flight and into the relaxed parasympathetic mode producing a wide array of benefits* including:
        
○ Decreased anxiety and depression symptoms
○ Chronic pain management
○ Lower stress levels
○ Improved sleep quality`,
	},
	{
		question: "What is mindfulness?",
		answer: `   Mindfulness is a practice that involves intentionally bringing one's attention and awareness to the present moment without judgment. It's about being fully present and engaged in the here and now, rather than dwelling on the past or worrying about the future. Mindfulness encourages a non-judgmental attitude towards one's thoughts, emotions and sensations, allowing them to arise and pass without any added stress. By cultivating mindfulness, people often develop a greater sense of clarity, calmness and overall wellbeing, as well as enhance their ability to respond skillfully to the challenges of life.`,
	},
	{
		question: "What causes stress and anxiety?",
		answer: `Stress and anxiety can have various causes and can differ greatly from person to person. Here are a few common factors that contribute to stress and anxiety:

\n1. Major life changes: Significant life events such as moving, getting married (or divorced), starting a new job or experiencing the loss of a loved one can trigger it.
\n2. Work or school pressure: High workloads, tight deadlines, challenging bosses, or work pressure can lead to stress and anxiety.
\n3. Financial challenges: Job loss, debt, or just struggling to make ends meet can be a significant source of stress and anxiety.
\n4. Relationships: Whether romantic, familial or social, strain or conflict in relationships can cause stress and anxiety.
\n5. Health concerns: Managing chronic illness, physical pain or battling a health condition can be a cause, as well.
\n6. Traumatic experiences: Experiencing a traumatic event, such as an accident, abuse or even a natural disaster can lead to anxiety-related conditions.
\n7. Uncertainty and change: Experiencing frequent change (even positive change!) or feeling uncertain about the future can be a common cause of anxiety.

It's important to note that not everyone experiences stress and anxiety in the same way. If you're dealing with stress and anxiety, it's recommended to seek support from a mental health professional who can provide personalized guidance.`,
	},
	{
		question: "Why do I have trouble sleeping?",
		answer: `There can be various reasons why you may be experiencing trouble sleeping. Here are a few common factors that can contribute to sleep difficulties:

\n1. Stress and Anxiety: High levels of stress or anxiety can make it difficult to relax and fall asleep. Racing thoughts, worry, or an overactive mind can keep you awake at night.
\n2. Poor Sleep Habits: Irregular sleep patterns, inconsistent bedtime routines, excessive caffeine or alcohol consumption, and engaging in stimulating activities before bed can disrupt your sleep.
\n3. Environmental Factors: Uncomfortable sleeping environment, excessive noise, extreme temperatures, or inadequate lighting can interfere with your ability to fall asleep or stay asleep.
\n4. Medical Conditions: Certain medical conditions, such as chronic pain, sleep apnea, restless leg syndrome, or hormonal imbalances, can disrupt your sleep.
\n5. Mental Health Issues: Depression, bipolar disorder, post-traumatic stress disorder (PTSD), and other mental health disorders can affect sleep patterns and quality.
\n6. If you're consistently having trouble sleeping, it's advisable to consult with a healthcare professional who can help assess your specific situation and provide guidance that's tailored to your needs.`,
	},
];

export default Faq;
