// IMPORT LIBRARIES
import React from "react";

// IMPORT IMAGES
import ucsdLogo from'../../assets/images/ucsd-logo.png';

// IMPORT COMPONENTS
import ResumeLink from "../../components/resumeLink";

const Ucsd = () => {
  return (
    <li className="resume-item active">
        <div className="title">
            <ResumeLink 
                name="UNIVERSITY OF CALIFORNIA - SAN DIEGO" 
                url="https://ucsd.edu/" 
            />
        </div>

        <div className="sub-title">M.S. IN{" "}
            <ResumeLink 
                name="COMPUTER SCIENCE" 
                url="https://cse.ucsd.edu/" 
            />
        </div>

        <div className="sub-sub-title">September 2022 - March 2024</div>

        <img 
        src={ucsdLogo} 
        className="resume-logo ucsd-logo"
        alt=""
        ></img>

        <div className="content">
            <p><b>Graduate Teaching Assistant:</b></p>
            <p>&emsp; 1. CSE 250A - AI: Probabilistic Reasoning and Decision Making with Professor {" "} 
                <ResumeLink 
                    name="Taylor Berg-Kirkpatrick" 
                    url="https://cseweb.ucsd.edu/~tberg/" 
                /> - Fall 2023 (~300 students)
            </p>
            {/* Students Rating: 94.1% (Based on submitted evaluations) */}
            <p>&emsp; 2. CSE 251A - Machine Learning Algorithms with Professor {" "} 
                <ResumeLink 
                    name="Taylor Berg-Kirkpatrick" 
                    url="https://cseweb.ucsd.edu/~tberg/" 
                /> - Winter 2024 (~350 students)
            </p>
            {/* Students Rating: (Based on submitted evaluations) */}
            <p><b>CGPA</b>: 4.0/4.0</p>
            <p><b>Courses:</b></p>
            <p><b>&ensp;• Fall 2023 Quarter [September 2023 to December 2023]</b></p>
            <p>&emsp; 1. CSE 218 - Advanced Topics in Software Engineer by Professor {" "} 
                <ResumeLink 
                    name="Nadir Weibel" 
                    url="https://hxi.ucsd.edu/author/nadir-weibel/" 
                />
            </p>
            <p>&emsp; 2. CSE 599 - Teaching Methods in Computer Science</p>
            <p>&emsp; 3. ECE 290 - Seminar Series </p>
            <p><b>&ensp;• Spring 2023 Quarter [April 2023 to July 2023]</b></p>
            <p>&emsp; 1. CSE 256 - Statistical Natural Language Processing by Professor {" "} 
                <ResumeLink 
                    name="Ndapa Nakashole" 
                    url="https://ndapa.us/" 
                />
            </p>
            <p>&emsp; 2. CSE 290I - Training Generative Models by Professor {" "} 
                <ResumeLink 
                    name="Taylor Berg-Kirkpatrick" 
                    url="https://cseweb.ucsd.edu/~tberg/" 
                />
            </p>
            <p>&emsp; 3. CSE 291F - Unsupervised Learning by Professor {" "} 
                <ResumeLink 
                    name="Sanjoy Dasgupta" 
                    url="https://cseweb.ucsd.edu/~dasgupta/" 
                />
            </p>
            <p>&emsp; 4. CSE 293 - Project Work under Professor {" "} 
                <ResumeLink 
                    name="Julian McAuley" 
                    url="https://cseweb.ucsd.edu/~jmcauley/" 
                />
            </p>

            <p><b>&ensp;• Winter 2023 Quarter [January 2023 to March 2023]</b></p>
            <p>&emsp; 1. CSE 202 - Algorithm Design and Analysis by Professor {" "} 
                <ResumeLink 
                    name="Russell Impagliazzo" 
                    url="https://cseweb.ucsd.edu/~russell/" 
                />
            </p>
            <p>&emsp; 2. CSE 224 - Graduate Networked Systems by Professor {" "} 
                <ResumeLink 
                    name="George Porter" 
                    url="https://cseweb.ucsd.edu/~gmporter/" 
                />
            </p>
            <p>&emsp; 3. CSE 257 - Search and Optimization by Professor {" "} 
                <ResumeLink 
                    name="Sicun Gao" 
                    url="https://scungao.github.io/" 
                />
            </p>

            <p><b>&ensp;• Fall 2022 Quarter [September 2022 to December 2022]</b></p>
            <p>&emsp; 1. CSE 250A - AI: Probabilistic Reasoning and Decision Making by Professor {" "} 
                <ResumeLink 
                    name="Taylor Berg-Kirkpatrick" 
                    url="https://cseweb.ucsd.edu/~tberg/" 
                />
            </p>
            <p>&emsp; 2. CSE 258R - Recommender System and Web Mining by Professor {" "} 
                <ResumeLink 
                    name="Julian McAuley" 
                    url="https://cseweb.ucsd.edu/~jmcauley/" 
                />
            </p>
            <p>&emsp; 3. MED 277 - Introduction to Biomedical Natural Language Processing by Professors {" "} 
                <ResumeLink 
                    name="Michael Hogarth" 
                    url="https://www.hogarth.org/" 
                /> &{" "} 
                <ResumeLink 
                    name="Shamim Nemati" 
                    url="https://www.nematilab.info/people/shamim/index.html" 
                />
            </p>
            </div>
                    
            <div className="pointer"></div>
    </li>
    );
}

export default Ucsd;