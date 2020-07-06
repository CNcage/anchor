<<<<<<< HEAD
import React from 'react';
import { ThemeProvider } from 'styled-components';
import ChatBot from 'react-simple-chatbot';
import pic1 from '../../img/1.png';
import DocBotPic from '../../img/bot/docBot3.png'

// icons
import { FaRegLaughBeam } from "react-icons/fa";

let docBot = DocBotPic


=======
import React from "react"
import { ThemeProvider } from "styled-components"
import ChatBot from "react-simple-chatbot"
import pic1 from "../../img/1.png"
>>>>>>> master

const theme = {
    background: " ",
    fontFamily: "Helvetica Neue",
    headerBgColor:
        "linear-gradient(90deg, rgba(199,188,204,1) 20%, rgba(67,127,175,1) 100%);",
    headerFontColor: "#fff",
    headerFontSize: "15px",
    botBubbleColor: "#c7bccc",
    botFontColor: "#000",
    userBubbleColor: "#437faf",
    userFontColor: "#fff",
}

const BubbleStyle = {}

const IconStyle = {
    borderRadius: "25px",
    width: "35px",
}

function DocBot(props) {
    const steps = [
        {
            id: "goodmorning",
            message: `Good morning ${props.userName}, how are you feeling?`,
            trigger: "Morning_feeling",
        },
        {
            id: "Morning_feeling",
            options: [
                {
<<<<<<< HEAD
                    value: 1, label: `I feel awesome! <i class="FaRegLaughBeam"></i>`,
=======
                    value: 1,
                    label: "Awesome",
>>>>>>> master
                    trigger: () => {

                        props.set_feeling(`I felt great`)
                        return 'Temp'
                    }
                },
                {
<<<<<<< HEAD
                    value: 2, label: 'I could be better...',
=======
                    value: 2,
                    label: "Could be better",
>>>>>>> master
                    trigger: () => {
                        props.set_feeling(`I felt ok`)
                        return 'Temp'
                    }
                },
                {
<<<<<<< HEAD
                    value: 3, label: 'I feel awful!',
=======
                    value: 3,
                    label: "Awful",
>>>>>>> master
                    trigger: () => {
                        props.set_feeling(`I felt awful`)
                        return 'Temp'
                    }
                },
                {
<<<<<<< HEAD
                    value: 4, label: 'I Need Help!',
=======
                    value: 4,
                    label: "I Need Help",
>>>>>>> master
                    trigger: () => {
                        props.set_feeling(`I Needed Help`)
                        return 'Urgent'
                    }
                },
            ],
        },
        {
<<<<<<< HEAD
            id: 'Temp',
            message: `Is your temperature at or above 37.8°C?`,
            trigger: 'tempOption',
=======
            id: "Temp",
            message: `Is your temperature above 37.8°C`,
            trigger: "tempOption",
>>>>>>> master
        },
        {
            id: "tempOption",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: () => {
                        props.set_temp(`My temp was over 37.8°C`)
                        return 'highTemp'
                    }
                },
                {
                    value: 2,
                    label: "No",
                    trigger: () => {
                        props.set_temp(`My temp was under 37.8°C`)
                        return 'lowerTemp'
                    }
                },
            ],
        },
        {
<<<<<<< HEAD
            id: 'lowerTemp',
            message: `Great! Your temperature is within the 'normal' range, Would you like some more information?`,
            trigger: 'summeryOption',
=======
            id: "lowerTemp",
            message: `Great! Your temperature is within the 'normal' range, Would you like more information?`,
            trigger: "summeryOption",
>>>>>>> master
        },
        {
            id: "summeryOption",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: "summery",
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "end1",
                },
            ],
        },
        //////////////////////////////////////////////////////////high temp!
        {
<<<<<<< HEAD
            id: 'highTemp',
            message: `Hmm, that seems a little high...`,
            trigger: 'highTemp2',
        },
        {
            id: 'highTemp2',
            message: `Are you experiencing any of these symptoms? (select each symptom for more information!)`,
            trigger: 'symptoms',
        },
        //////////////////////////////////////////////////////////loss of Taste or Smell
        {
            id: 'tasteness',
            message: `A change to your sense of smell or taste means that you've noticed you cannot smell or taste anything, or things smell or taste different to normal`,
            trigger: 'log_taste',
        },
        {
            id: 'log_taste',
            message: `Would you like to log your loss of smell and/or taste as a symptom?`,
            trigger: 'log_taste0',
=======
            id: "highTemp",
            message: `Hmm, that seems a little high..`,
            trigger: "highTemp2",
        },
        {
            id: "highTemp2",
            message: `Are you experiencing any of these symptoms.. click for more info`,
            trigger: "symptoms",
        },
        //////////////////////////////////////////////////////////loss of Taste or Smell
        {
            id: "tasteness",
            message: `A change to your sense of smell or taste means you've noticed you cannot smell or taste anything, or things smell or taste different to normal`,
            trigger: "log_taste",
        },
        {
            id: "log_taste",
            message: `Would you like to log your loss of smell and/or taste`,
            trigger: "log_taste0",
>>>>>>> master
        },
        {
            id: "log_taste0",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: () => {
<<<<<<< HEAD
                        props.set_tasteSmell(`My sense of smell / taste was affected`)
                        return 'check1'
                    }
=======
                        props.set_tasteSmell(
                            `My sense of smell / taste was effected`
                        )
                        return "check1"
                    },
>>>>>>> master
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "moreSymptoms",
                },
            ],
        },
        //////////////////////////////////////////////////////////loss of Taste or Smell
        {
<<<<<<< HEAD
            id: 'cough',
            message: `A new, continuous cough means that you are coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours. If you usually have a cough, it may be worse than usual.`,
            trigger: 'log_cough',
        },
        {
            id: 'log_cough',
            message: `Would you like to log a continuous cough as a symptom?`,
            trigger: 'log_cough0',
=======
            id: "cough",
            message: `A new, continuous cough means that you are coughing a lot for more than an hour, or 3 or more coughing episodes in 24 hours.
      If you usually have a cough, it may be worse than usual.`,
            trigger: "log_cough",
        },
        {
            id: "log_cough",
            message: `Would you like to log a continuous cough`,
            trigger: "log_cough0",
>>>>>>> master
        },
        {
            id: "log_cough0",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: () => {
                        props.set_cough(`I had a continuous cough`)
                        return "check1"
                    },
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "moreSymptoms",
                },
            ],
        },
        //////////////////////////////////////////////////////////symptoms
        {
            id: "symptoms",
            options: [
                {
                    value: 1,
                    label: "Breathlessness",
                    trigger: "breathless",
                },
                {
                    value: 2,
                    label: "Change in Taste / Smell",
                    trigger: "tasteness",
                },
                {
                    value: 3,
                    label: "Continuous Cough",
                    trigger: "cough",
                },
                {
                    value: 4,
                    label: "None of these",
                    trigger: "none",
                },
            ],
        },
        {
<<<<<<< HEAD
            id: 'none',
            message: `Okay, that's good! Just remember...`,
            trigger: 'summery',
=======
            id: "none",
            message: `Ok that's good, just remember...`,
            trigger: "summery",
>>>>>>> master
        },
        ////////////////////////////////////////////////////////////breathless!
        {
            id: "breathless",
            message: `Breathlessness means that you find it difficult to do simple tasks, as if you are struggling to take in oxygen.`,
            trigger: "breathless2",
        },
        {
            id: "breathless2",
            message: `Do you have a pulse oximeter?`,
            trigger: "breathlessChoice",
        },
        {
            id: "breathlessChoice",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: "oxygenLevel",
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "cantSpeak",
                },
            ],
        },
        {
            id: "moreSymptoms",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: "symptoms",
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "end1",
                },
            ],
        },
        ////////////////////////////////////////////////////////////Oxygen!
        {
<<<<<<< HEAD
            id: 'oxygenLevel',
            message: `Is your oxygen level displaying as 95% or over?`,
            trigger: 'oxyChoice',
=======
            id: "oxygenLevel",
            message: `Oxygen level over 95%`,
            trigger: "oxyChoice",
>>>>>>> master
        },
        {
            id: "oxyChoice",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: "cantSpeak",
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "submitNotification",
                },
            ],
        },
        ////////////////////////////////////////////////////////////can't speak?
        {
<<<<<<< HEAD
            id: 'cantSpeak',
            message: `URGENT! If you cannot speak a full sentence or if your lips are turning blue, reply 'Yes'`,
            trigger: 'speakChoice',
=======
            id: "cantSpeak",
            message: `URGENT! If you cannot speak a full sentence or if your lips are turning blue reply Yes`,
            trigger: "speakChoice",
>>>>>>> master
        },
        {
            id: "speakChoice",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: "submitNotification",
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "log_oxyQ",
                },
            ],
        },
        ////////////////////////////////////////////////////////////log oxygen?!
        {
<<<<<<< HEAD
            id: 'log_oxyQ',
            message: `Great, would you still like to log your shortness of breath as a symptom?`,
            trigger: 'log_oxyO',
=======
            id: "log_oxyQ",
            message: `Great, would you still like to log you had shorness of breath`,
            trigger: "log_oxyO",
>>>>>>> master
        },
        {
            id: "log_oxyO",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: () => {
                        props.set_breathless(`I felt breathless`)
                        return "check1"
                    },
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "log_oxyQ",
                },
            ],
        },
        {
<<<<<<< HEAD
            id: 'check1',
            message: `Thanks, that's been logged for you. Do you have any more symptoms?`,
            trigger: 'moreSymptoms',
        },
        ////////////////////////////////////////////////////////////emergancy notification!
        {
            id: 'submitNotification',
            message: `Stay calm, ${props.userName}. Your emergency contact has been notified. Help is on the way.`,
=======
            id: "check1",
            message: `That's logged. Do you have any more symptoms?`,
            trigger: "moreSymptoms",
        },
        ////////////////////////////////////////////////////////////emergancy notification!
        {
            id: "submitNotification",
            message: `Stay calm. Your emergancy contact has been notified. Help is on the way`,
>>>>>>> master
            end: true,
        },
        /////////////////////////////////////////////////////////////help!
        {
<<<<<<< HEAD
            id: 'Urgent',
            message: `Are you struggling to breathe?`,
            trigger: 'UrgentQ1',
=======
            id: "Urgent",
            message: `Are you struggling to breathe`,
            trigger: "UrgentQ1",
>>>>>>> master
        },
        {
            id: "UrgentQ1",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: "Urgent1_yes",
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "contactEmergency",
                },
            ],
        },
        {
<<<<<<< HEAD
            id: 'Urgent1_yes',
            message: `Can you speak a full sentence?`,
            trigger: 'UrgentQ2',
=======
            id: "Urgent1_yes",
            message: `Can you speak a full sentence`,
            trigger: "UrgentQ2",
>>>>>>> master
        },
        {
            id: "UrgentQ2",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: "Urgent2_yes",
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "contactEmergency999",
                },
            ],
        },
        {
<<<<<<< HEAD
            id: 'Urgent2_yes',
            message: `Are your lips blue?`,
            trigger: 'UrgentQ3',
=======
            id: "Urgent2_yes",
            message: `Are your lips blue`,
            trigger: "UrgentQ3",
>>>>>>> master
        },
        {
            id: "UrgentQ3",
            options: [
                {
                    value: 1,
                    label: "Yes",
                    trigger: "contactEmergency",
                },
                {
                    value: 2,
                    label: "No",
                    trigger: "contactEmergency999",
                },
            ],
        },
        {
<<<<<<< HEAD
            id: 'contactEmergency',
            message: `Okay, try and stay calm, ${props.userName}.`,
            // message: `Submitting Notification LOCAL`,
            trigger: 'contactEmergency2'
        },
        {
            id: 'contactEmergency2',
            message: `Your emergency contact has been notified. Help is on the way.`,
            end: true,
        },
        {
            id: 'contactEmergency999',
            message: `Okay, try and stay calm, ${props.userName}.`,
            // message: `Submitting Notification 999`,
            trigger: 'contactEmergency9992'
        },
        {
            id: 'contactEmergency9992',
            message: `Stay calm. Your emergency contact has been notified. Help is on the way.`,
=======
            id: "contactEmergency",
            message: `Submitting Notification LOCAL`,
            trigger: "contactEmergency2",
        },
        {
            id: "contactEmergency2",
            message: `Stay calm. Your emergency contact has been notified. Help is on the way`,
            end: true,
        },
        {
            id: "contactEmergency999",
            message: `Submitting Notification 999`,
            trigger: "contactEmergency9992",
        },
        {
            id: "contactEmergency9992",
            message: `Stay calm. Your emergency contact has been notified. Help is on the way`,
>>>>>>> master
            end: true,
        },
        ////////////////////////////////////////////////////////////summery!
        {
            id: "summery",
            message: `If you have or have had any COVID-19 symptoms, please ensure that you follow government advice and self isolate for at least 7 days...`,
            trigger: "summery1",
        },
        {
<<<<<<< HEAD
            id: 'summery1',
            message: `This means you must not leave your home. take public transport or make contact with anyone outside your household.`,
            trigger: 'summery2',
=======
            id: "summery1",
            message: `This means you must not leave your home. take public transport or make contact with anyone outside your household`,
            trigger: "summery2",
>>>>>>> master
        },
        {
            id: "summery2",
            message: `Anyone living with you must also self-isolate for at least 14 days.`,
            trigger: "summery3",
        },
        {
<<<<<<< HEAD
            id: 'summery3',
            message: `For any further help...`,
            trigger: 'siteLink1',
=======
            id: "summery3",
            message: `for further help..`,
            trigger: "siteLink1",
>>>>>>> master
        },
        {
            id: "siteLink1",
            component: (
<<<<<<< HEAD
                <div> <a href="https://111.nhs.uk/covid-19/">NHS 111 Online Coronavirus Service</a></div>
=======
                <div>
                    {" "}
                    <a href="https://111.nhs.uk/covid-19/">
                        NHS 111 online coronovirus Service
                    </a>
                </div>
>>>>>>> master
            ),
            trigger: 'end1',
        },
        {
            id: 'end1',
            message: `Don't forget to click 'log' this session!`,
            trigger: () => {
                props.submitLog()
            },

        },
        {
            id: 'end2',
            options: [
                {
                    value: 1, label: 'Log Now',
                    trigger: () => {
                        props.submitLog()
                        return 'end3'
                    }
                }
            ]
        },
        {
            id: 'end3',
            message: `Thanks, this diary entry has been saved! See you soon!'`,
            trigger: () => {
                props.submitLog()
            },
            end: true,
        },
    ]
    return <ThemeProvider theme={theme}>
        < ChatBot
            steps={steps}
            userAvatar={pic1}
            botAvatar={docBot}
            bubbleStyle={BubbleStyle}
            avatarStyle={IconStyle}
            headerTitle="DocBot"
            placeholder="Reply..."
            floating={false}
            enableSmoothScroll={true}
        />
    </ThemeProvider >
}

export default DocBot
