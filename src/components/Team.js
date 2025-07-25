import React from 'react';

const Team = () => {
    return (
        <div id="team" className="bg-gray-100 dark:bg-gray-900 py-12">
            {/* Section Header */}
            <div className="my-4 py-4">
                <h2 className="my-2 text-center text-3xl text-blue-900 dark:text-blue-300 uppercase font-bold">
                    Meet Our Dynamic Team
                </h2>
                <div className='flex justify-center'>
                    <div className='w-24 border-b-4 border-blue-900 dark:border-blue-300 mb-6'></div>
                </div>
                <p className="text-center text-base font-medium text-gray-600 dark:text-gray-300 mx-4 md:mx-32 mt-2">
                    Our core team is a passionate group of student innovators and developers 
                    bringing together diverse skills to shape India's digital future.
                </p>
                <p className="text-center text-base font-medium text-gray-600 dark:text-gray-300 mx-4 md:mx-32 mt-2">
                    From building seamless applications to designing secure blockchain systems, 
                    every member contributes with dedication and creativity.
                </p>
                <p className="text-center text-base font-medium text-gray-600 dark:text-gray-300 mx-4 md:mx-32 mt-2">
                    We thrive on collaboration, continuous learning, and the drive to create technology 
                    that truly empowers users.
                </p>
            </div>

            {/* Team Roles Grid */}
            <div className="px-8 mt-8" data-aos="fade-up" data-aos-delay="400">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {/* Frontend Team */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition transform hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.02] hover:shadow-lg">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Frontend Team</h3>
                        <ul className="text-gray-700 dark:text-gray-200 text-sm list-disc ml-5">
                            <li>Saba Fathima</li>
                            <li>Yashwanth Raj D J</li>
                            <li>Yashaswini C K</li>
                        </ul>
                    </div>

                    {/* Backend Team */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition transform hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.02] hover:shadow-lg">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Backend Team</h3>
                        <ul className="text-gray-700 dark:text-gray-200 text-sm list-disc ml-5">
                            <li>Apoorva C Malkhedkar</li>
                            <li>Srushti S</li>
                            <li>Swathi T</li>
                            <li>Chethanashree M</li>
                            <li>Chinmayee C L</li>
                        </ul>
                    </div>

                    {/* Application Team */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition transform hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.02] hover:shadow-lg">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Application Team</h3>
                        <ul className="text-gray-700 dark:text-gray-200 text-sm list-disc ml-5">
                            <li>Meghana C D</li>
                            <li>Mallanagowda P</li>
                        </ul>
                    </div>

                    {/* Blockchain Team */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition transform hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.02] hover:shadow-lg">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">Blockchain Team</h3>
                        <ul className="text-gray-700 dark:text-gray-200 text-sm list-disc ml-5">
                            <li>Dhanya M.P</li>
                            <li>Harshitha M</li>
                        </ul>
                    </div>

                    {/* AI / ML Team */}
                    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition transform hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-[1.02] hover:shadow-lg">
                        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-300 mb-2">AI / ML Team</h3>
                        <ul className="text-gray-700 dark:text-gray-200 text-sm list-disc ml-5">
                            <li>Bhumika S</li>
                            <li>Madhushree B M</li>
                        </ul>
                    </div>

                </div>
            </div>

            {/* Team Footer Note */}
            <div className="text-center mt-12 px-4 md:px-32">
                <p className="text-gray-600 dark:text-gray-300 text-base font-medium">
                    Together, we collaborate, innovate, and build secure digital products that serve a greater purpose for India.
                </p>
            </div>
        </div>
    );
};

export default Team;
