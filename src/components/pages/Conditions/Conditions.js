import photu from "../../../media/gi.png";
import fib from "../../../media/ch1.png";
import ercp from "../../../media/hep (1).png";
import ce from "../../../media/fl.png";
import eus from "../../../media/Eus 11.png";
import hm from "../../../media/acid (1).png";
import cc from "../../../media/cc.jpeg";
import ep from "../../../media/ep.jpeg";
import ue from "../../../media/ue.png";
import pol from "../../../media/pol.png";
import ab from "../../../media/ab.png";
import con from "../../../media/con.png";
import bl from "../../../media/bl.png";
import d from "../../../media/div.png";
import rb from "../../../media/rb.png";
import gl from "../../../media/gall.png";
import ib from "../../../media/ib.png";
import be from "../../../media/be.png";
import gi from "../../../media/gi.png";
import uc from "../../../media/ulcer.png";
import colon from "../../../media/colon.png";
import sibo from "../../../media/sibo.png";
import hp from "../../../media/hp.png";
import am from "../../../media/am.png";
import cd from "../../../media/cd.png";
import cb from "../../../media/cb.png";
import shi from "../../../media/shi.png";
import gia from "../../../media/gia.png";
import sal from "../../../media/sal.png";
import { Helmet } from "react-helmet-async";




const Conditions = (props) => {
  const procedures = [
    {
      image: photu,
      name: "Celiac Disease",
      description:"Celiac disease is a condition in which a person develops inflammation, or swelling, and damage to their intestine (gut) when they eat gluten. Some of the symptoms of celiac disease are gas, stomach bloating and constipation.",
      questions:[
        {
          qs: "What is celiac disease?",
          ans: "Celiac disease is a condition in which a person develops inflammation, or swelling, and damage to their intestine (gut) when they eat gluten. Some of the symptoms of celiac disease are gas, stomach bloating and pain that does not go away, diarrhea and constipation. Fatigue and headaches are also common.\n \n People with celiac disease cannot eat gluten. Gluten is a protein found mainly in wheat, barley and rye, but may also be in products you use often, such as soy sauce and salad dressing, as well as some medicines, vitamins and even candies.",
        },
        {
          qs: "What are symptoms of celiac disease?",
          ans: "There are many different symptoms of celiac disease. Celiac disease can cause one, some or no symptoms.\n   <br/> ● Gas, belly bloating and pain that doesn’t go away. <br/> ● Diarrhea (loose stool) or constipation (hard stool or trouble passing stool) that doesn’t go away. <br/> ● Pale, foul-smelling or fatty stool.<br/> ●  Tiredness or low energy levels.<br/> ●  Changes in behavior; irritability in children.<br/> ● Pale sores inside the mouth.<br/> ● Itchy skin rash. <br/> ● Brain fog. ",
        },
        {
            qs: "What are the tests for celiac disease?",
            ans: "After talking about your symptoms with your doctor, tests for celiac disease may be performed. As celiac disease is a lifelong health issue, a correct diagnosis is very important. If you think you may have celiac disease, do not get rid of gluten from your diet until your doctor has tested you.\n <br/> ● Blood Test:A blood test to see if you have celiac disease can only work if you are eating gluten, so be sure to keep gluten in your diet before testing is done. (Only limit gluten from your diet if your doctor tells you to do so.) <br/> ● Endoscopy:An endoscopy is done to get small pieces of tissue (biopsies) from your small intestine to see if there is damage stopping your body from taking in nutrients, caused by celiac disease.",
          },
          {
            qs: "How is celiac disease treated?",
            ans: "he gastroenterologists treat celiac disease with a gluten-free diet and provide the education and tools you need so you can eliminate all sources of the protein from your diet. They may also recommend vitamin and mineral supplements to restore nutritional deficiencies and medications to reduce intestinal inflammation.",
          }
          
      ],
    },
    {
      image: fib,
      name: "Crohn's Disease",
      description:
        "Crohn's disease is a type of inflammatory bowel disease (IBD). It causes swelling of the tissues (inflammation) in your digestive tract, which can lead to abdominal pain, severe diarrhea, fatigue, weight loss and malnutrition.",
        questions:[
            {
              qs: "What is Crohn's Disease?",
              ans: "Crohn’s disease is a type of inflammatory bowel disease that usually occurs in your small intestine and colon, although it can affect any part of your gastrointestinal tract.\n Crohn’s disease usually develops gradually and causes symptoms, including:<br/> ● Diarrhea <br/> ● Abdominal cramping <br/> ● Frequent need for bowel movements <br/> ● Feeling like you haven’t emptied your bowel entirely <br/> ● Weight loss <br/> ● Appetite loss.",
            },
            {
              qs: "What causes Crohn’s disease?",
              ans: "Medical researchers haven’t identified a specific cause of Crohn’s disease. However, many factors contribute to your risk of developing the condition. For example, if you have an autoimmune disease or a family history of inflammatory bowel disease, your risk of developing Crohn’s disease increases.",
            },
            {
                qs: "How is Crohn's disease diagonsed?",
                ans: "Your doctor will likely diagnose Crohn's disease only after ruling out other possible causes for your signs and symptoms. There is no single test to diagnose Crohn's disease. Your doctor will likely use a combination of tests to help confirm a diagnosis of Crohn's disease, including:<br/> ● Blood Test<br/> ● Stool Studies <br/> ● Capsule Colonscopy<br/> ● MRI",
              },
              
              {
                qs: "How is Crohn’s disease treated??",
                ans: "Depending on your condition, your doctor might prescribe medication, including anti-inflammatory drugs, immunomodulators, and antibiotics, to reduce the inflammation in your bowel and relieve your symptoms.\n Your doctor can also provide advice on dietary adjustments to reduce your risk of symptom flare-ups. They can also help you create meal plans that provide the nutrients you need without irritating your digestive tract\n In some cases, surgery to remove the damaged parts of your digestive tract is necessary to treat Crohn’s disease. ",
              }
          ],
    },
    {
        image: ercp,
        name: "Hepatitis",
        description:
          "Hepatitis is a condition that causes inflammation in your liver, the largest organ of your body. The liver is responsible for assisting in the digestion of the food you eat, removing toxins from the body, and storing energy.",
          questions:[
            {
              qs: "What is hepatitis?",
              ans: "Hepatitis is a condition that causes inflammation in your liver, the largest organ of your body. The liver is responsible for assisting in the digestion of the food you eat, removing toxins from the body, and storing energy.\n When a virus enters the liver, it can lead to hepatitis. There are three types of hepatitis referred to by the virus that causes it, including: <br/> ● Hepatitis A:This form of liver inflammation develops due to the hepatitis A virus, which you contract through infected stool, by drinking untreated water, or by sexual contact with an infected person.  <br/> ● Hepatits B:This form of liver inflammation develops from the hepatitis B virus, which spreads through blood, semen, and other bodily fluids.   <br/> ● Hepatitis C:This form of liver inflammation develops from the hepatitis C virus. A hepatitis C diagnosis can be acute, with the infection lasting for several weeks, or chronic, in which the disease can be lifelong and increase your risk for permanent liver damage, cancer, or death. ",
            },
            {
              qs: "What are the symptoms of hepatitis?",
              ans: "Symptoms of hepatitis A, B, and C are similar and can vary from person to person. If you have any form of hepatitis, you can experience symptoms like:\n <br/> ● Itching<br/> ● Nausea <br/> ● Joint Pain<br/> ●Chronic Fatigue <br/> ● Abdominal Pain\n It’s also common to develop jaundice, a yellowing of your skin and the whites of your eyes if hepatitis begins to damage your liver.",
            },
            {
                qs: "How is hepatitis diagnosed?",
                ans:"<br/> ● Physical Exam:A doctor performs a physical exam to look for signs and symptoms of viral hepatitis. He or she presses gently against your abdomen to assess whether the liver is swollen or tender and examines your eyes and skin to see whether jaundice has caused a yellow hue to develop. <br/> ● Blood Tests:Blood tests are used to look for signs that a viral infection is present and to evaluate liver function. Your doctor draws a small amount of blood from a vein in your arm and sends it to a laboratory for testing <br/> ● Imaging Tests: If the results of blood tests confirm a diagnosis of hepatitis A, B, or C, your doctor may recommend one or more imaging tests of the liver to assess liver damage",
              },
              {
                qs: "How is hepatitis treated?",
                ans: "Your treatment plan for hepatitis depends on the type you have. Generally, acute hepatitis A and B don’t require treatment, and you recover with short-term rest. If you have chronic hepatitis A or B, you may need antiviral medications to prevent liver damage.\n Treating both acute and chronic hepatitis C typically involves antiviral medications. You may need ongoing liver tests to identify the early stages of liver damage.\n To prevent infections with hepatitis A and B, you can receive vaccinations. However, there isn’t currently a preventive vaccine for hepatitis C.",
              }
             
          ],
    },
    {
        image: ce,
        name: "Fatty Liver",
        description:
          "Fatty liver is also known as hepatic steatosis. It happens when fat builds up in the liver. Having small amounts of fat in your liver is normal, but too much can become a health problem. Fatty liver diseases are of two types AFLD AND NAFLD.",
          questions:[
            {
              qs: "What is fatty liver?",
              ans: "Fatty liver is also known as hepatic steatosis. It happens when fat builds up in the liver. Having small amounts of fat in your liver is normal, but too much can become a health problem\n When fatty liver develops in someone who drinks a lot of alcohol, it’s known as alcoholic fatty liver disease (AFLD).\n In someone who doesn’t drink a lot of alcohol, it’s known as nonalcoholic fatty liver disease (NAFLD)..",
            },
            {
              qs: "What are the symptoms of fatty liver?",
              ans: "Some of the common symptoms and warning signs of fatty liver disease include:<br/> ● Weight loss <br/> ● Appetite loss <br/> ● Fatigue <br/> ● Nosebleeds <br/> ● Abdominal pain and swelling\n The damaging effects of overconsumption of alcohol on your liver, including fatty liver, are well documented. However, you can also develop fatty liver disease even if you don’t drink much alcohol. ",
            },
            {
                qs: "Types of Fatty Liver Disease",
                ans: "There are two main types of fatty liver disease: nonalcoholic and alcoholic.\n \n Nonalcoholic fatty liver disease (NAFLD):- Nonalcoholic fatty liver disease (NAFLD) is when fat builds up in the liver of people who don’t drink a lot of alcohol.If you have excess fat in your liver and no history of heavy alcohol use, you may receiveTrusted Source a diagnosis of NAFLD. If there’s no inflammation or other complications, the condition is known as simple NAFLD.\n \n Alcoholic fatty liver disease (AFLD):Drinking a lot of alcohol damages the liver. Alcoholic fatty liver disease (AFLD) is the earliest stage of alcohol-related liver disease. If there’s no inflammation or other complications, the condition is known as simple alcoholic fatty liver.",
              },
              {
                qs: "How is fatty liver diagonsed?",
                ans: "To diagnoseTrusted Source fatty liver, a doctor will take your medical history, conduct a physical exam, and order one or more tests. <br/> ● Physical exam:To check for liver inflammation, a doctor may palpate or press on your abdomen. If your liver is enlarged, they might be able to feel it.<br/> ● Blood tests:In many cases, fatty liver disease is diagnosed after blood tests show elevated liver enzymes. For example, a doctor may order the alanine aminotransferase test (ALT) and aspartate aminotransferase test (AST) to check your liver enzymes <br/> ● Liver Biopsy:A liver biopsy is considered the best way to determine the severity of liver disease. " ,
              },
              {
                qs: "How is fatty liver treated",
                ans: "There are no medications approved for NAFLD, though some are in clinical trials.\n Usually the first line of treatment is to lose weight. It helps reduce fat, inflammation, and scarring in your liver. Losing just 3% to 5% of your body weight can cut down on how much fat is in your liver. Weight loss surgery is also an option if you have a lot to lose.\nYou’ll also need to quit drinking. It’s the only way you can keep liver damage from getting worse. You may even be able to undo some of the liver damage that’s already happened. Talk to your doctor about how you can get help. You may need a medically supervised detox program to safely quit drinking and manage withdrawal symptoms.",
              }
          ],
    },
    {
        image: pol,
        name: "Polyps",
        description:
          "Polyps are abnormal tissue growths that can appear raised or flat bumps. Polyps can grow on several areas of the body, including your colon, or large intestine, the tube at the end of your digestive tract that makes and stores stool.",
          questions:[
            {
              qs: "What are polyps?",
              ans: "Polyps are abnormal tissue growths that can appear raised or flat bumps. Polyps can grow on several areas of the body, including your colon, or large intestine, the tube at the end of your digestive tract that makes and stores stool.\n While many polyps are harmless and cause no symptoms, some polyps can grow large enough to disrupt the function of your colon. Polyps can also become malignant, and some with polyps can be at increased risk for colon cancer.   ",
            },
            {
              qs: "What are symptoms of polyps?",
              ans: "Because most people with colon polyps do not experience any symptoms, you might not know you have a polyp until your doctor finds it during an examination of your colon.However, some people with colon polyps may experience:<br/> ● Rectal Bleeding <br/> ● Change in stool color <br/> ● Change in bowel habits <br/> ● Iron deficiency anemia ",
            },
          
              {
                qs: "How are colon polyps diagnosed?",
                ans: "A doctor can find colon polyps in several different ways, including: <br/> ● Colonoscopy <br/> ● Sigmoidoscopy <br/> ● CT Scan <br/> ● Stool Tests",
              },
              {
                qs: "What happens if you have a colon polyp?",
                ans: "When a colon polyp is found, your doctor will remove it (polypectomy) and test it in the laboratory to see what microscopic type it is (biopsy). Your doctor will determine when you should have a repeat screening test based on the number, size and microscopic analysis of polyps, in addition to your other risk factors.",
              }
          ],
    },
    {
        image: hm,
        name: "Acid Reflux",
        description:
          "Gastroesophageal reflux, GERD or just reflux, happens when what is inside your stomach — stomach acid, food or other contents — backs up out of the stomach into the esophagus  and possibly all the way into your throat and mouth.",
          questions:[
            {
              qs: "What is an Acid Reflux?",
              ans: "Gastroesophageal reflux, GERD or just reflux, happens when what is inside your stomach — stomach acid, food or other contents — backs up out of the stomach into the esophagus (the tube that links your mouth and stomach) and possibly all the way into your throat and mouth\n When that acid touches your esophagus (or what feels like your throat), it can cause a burning feeling in your chest or neck, known as heartburn.",
            },
            {
              qs: "What are symptoms of Acid Reflux?",
              ans: "<br/> ● Heartburn – a burning pain behind the chest that may move up toward the neck. <br/> ● Feeling like food is coming back up into your mouth, maybe with a bitter taste. <br/> ● Sore throat that won’t go away. <br/> ● Sore or burning throat that won’t go away. <br/> ● Asthma<br/> ● Chest Pain <br/> ● Feeling like there is a lump in your throat <br/> ● Feeling as though food sticks in the throat when going down.              ",
            },
            
              {
                qs: "Getting tested for GERD",
                ans: "There are many tests for GERD but not all patients with heartburn or GERD need testing. Your health care provider may choose to do one or more tests to find out if GERD has hurt your esophagus (the tube that links your mouth and stomach) or is causing your symptoms.Some of tests include:<br/> ● Esophagel manometry <br/> ● Endoscopy <br/> ● ph-impedance monitoring",
              },
              {
                qs: "What are Treatments for GERD?",
                ans: "Both medications and changes in your habits can put off and control symptoms of GERD. Talk to your health care provider about what choices are best for you to try first\n Keeping a diary about what you eat, when you eat, and how you feel after you eat can also help you better handle your symptoms and gives your health care provider useful information on what to suggest to make you feel better. Below is a list of things you can do to try to help control symptoms of GERD.<br/> ● Do not eat or drink items that give you heartburn or other bad symptoms.<br/> ● Be careful taking aspirin, anti-inflammatory and pain medications other than acetaminophen (like Tylenol®). These can make heartburn worse <br/> ● Eat smaller portions of food during meals and don’t eat too much. <br/> ● Stop eating three hours before lying down to sleep. ",
              }
          ],
    },

    {
        image: ab,
        name: "Abdominal Pain",
        description:
          "Abdominal pain has many causes, some more serious than others. What feels like a stomachache may be coming from another organ in your abdomen, or from outside of your digestive system. ",
          questions:[
            {
              qs: "What is abdominal pain?",
              ans: "Abdominal pain is discomfort anywhere in your belly region — between your ribs and your pelvis. We often think of abdominal pain as “stomach pain” or a “stomachache,” but pain in your abdomen could be coming from other organs besides your stomach, too.",
            },
            {
              qs: "What are the most common causes of abdominal pain?",
              ans: "Most causes are temporary and not serious. They may have to do with digestion, menstruation or a passing virus. For example:\n Digestive issues: <br/> ●Indigestion <br/> ● Gas and Gas pain <br/> ● Constipation <br/> ● Food poisoning\n \n Inflammation:<br/> ● Viral gastroenteritis (stomach flu). <br/> ● Peptic ulcer disease. <br/> ● Chronic acid reflux (GERD).",
            },
            {
                qs: "How is abdominal pain diagnosed?",
                ans: "Your healthcare provider will ask you detailed questions about your pain. They’ll want to know: <br/> ● Where you feel it. <br/> ● What it feels like<br/> ● How long you've had it <br/> ● If it comes and goes. <br/> ● If it stays in one place or moves. <br/> ● What makes it better or worse. <br/> ● What other symptoms you have.",
              },
              {
                qs: "How do you relieve abdominal pain?",
                ans: "Stomach pain has a wide variety of causes and treatments. Some conditions, such as gallstones or appendicitis, may require surgery. Others, such as ulcers or infections, may be eased with medicine. And sometimes you may just have to get through a bout of stomach flu or a kidney stone until it passes.\n If you don’t know what’s causing your abdominal pain, it’s important to find out, especially if it doesn’t go away on its own. Remember that even mild cases can be serious. However, if you have a pretty good idea that your stomachache is related to digestion, you can begin by treating yourself with: <br/> ● Bowel Rest:Stop eating, or only eat easy-to-digest foods like crackers or bananas <br/> ● Hydration. Drink plenty of water or a hydration formula.  <br/> ● Heat therapy. Try a warm water bottle or a soak in the bath.<br/> ● Home remedies. Try licorice for gas, ginger for indigestion, or peppermint to help relax your intestinal muscles.                ",
              },
              
          ],
    },
    {
        image: con,
        name: "Constipation",
        description:
          "Constipation is when you have infrequent or hard-to-pass bowel movements, have hard stools, or feel like your bowel movements are incomplete.Most of the time, it can be treated medically.",
          questions:[
            {
              qs: "What is constipation? ",
              ans: "Constipation is when you have infrequent or hard-to-pass bowel movements (meaning they are painful or you have to strain), have hard stools, or feel like your bowel movements are incomplete. Infrequent means less than three bowel movements a week.",
            },
            {
              qs: "What causes constipation? ",
              ans: "In most cases, constipation is a symptom, not a disease. It is more common in non-White than White populations and also in people who have lower socioeconomic status, lower parental education rate, less physical activity, depression, physical and sexual abuse, and stressful life events.\n Here are the common cause of constipation: <br/> ● Poor Diet<br/> ● Irritable bowel syndrome <br/> ● Poor bowel habits <br/> ● Pelvic floor dysfunction" ,
            },
            {
                qs: "Getting tested for constipation                ",
                ans: "If your doctor decides your constipation is bad enough, there are a few tests that can be done. To start, your doctor may take samples of blood, urine, and stool. Other tests your doctor might do: <br/> ● X-Ray <br/> ● Lower GI endoscopy <br/> ● Colonic transit time <br/> ● Anorectal motility study .",
              },
              {
                qs: "How to treat constipation?                ",
                ans: "The first step in treating constipation is to know that normal bowel function varies widely, from three bowel movements a day to three a week. You must figure out what is normal for you to notice a change in your normal bowel habits.\n A diet with fresh fruits, veggies and a lot of water, along with regular exercise, is a good start for most people with constipation or irregular bowel habits . Every day you should:<br/> ● Eat a well-balanced diet with whole grains, fresh fruits and veggies.<br/> ● Drink plenty of fluids (especially water).<br/> ● Exercise regularly.<br/> ● Set aside time after breakfast or dinner to go to the bathroom.<br/> ● Go to the bathroom when you feel like you have to. Don’t ignore the urge to have a bowel movement. ",
              },
              
          ],
    },
    {
        image: bl,
        name: "Gas & Bloating",
        description:
          "Gas is when air builds up in your small intestine and large intestine. Flatulence is when gas passes through the rectum and belching, or burping, is when gas passes through the mouth.          ",
          questions:[
            {
              qs: "What is gas?",
              ans: "Gas in the digestive tract is when air builds up in your intestines .Passing gas through the mouth is called belching or burping. Passing gas through the rectum is called flatulence. Gas comes from either swallowed air or the breakdown of undigested food by bacteria in the large intestine.       ",
            },
            {
              qs: "What causes gas? ",
              ans: "The most common cause of gas is swallowed air.\n Each time we swallow, a small amount of air enters the stomach. The gas then travels to the small intestine where part of it is absorbed into the body. The rest of the gas travels into the colon to be passed out through the rectum (flatulence). Sometimes, part of the gas is burped out through the mouth instead of going to the intestine.\n Some things cause you to swallow more air, including:<br/> ● Drinks that are carbonated (have bubbles or fizz). <br/> ● Being under a lot of stress.<br/> ● Having post-nasal drip.<br/> ● Smoking.",
            },
            {
                qs: "What are treatments for gas?",
                ans: "If your gas is causing you pain or discomfort, there are ways to help feel better. If you don’t feel better, talk to your doctor.\n Daily habits  <br/> ● Don’t chew gum or suck on hard candies. Doing so causes you to swallow more air. <br/> ● Check with a dentist to make sure your dentures fit the right way     <br/> ● Walking, jogging or moving around may help pass gas.<br/> ● Try getting rid of milk and milk products, such as cheese. If this helps you feel better, talk to your doctor to see if you might be lactose intolerant.  <br/> ● Eat less of the foods that are known to cause more gas, such as cauliflower, Brussels sprouts, bran, beans, broccoli and cabbage. Make sure you get fiber in other ways to help balance out your diet.                ",
              },
              {
                qs: "How do I prepare for a colonoscopy?",
                ans: "The team at Digestive Disease Care provides specific instructions on how to prepare for your colonoscopy. For them to get a good view of your colon, your bowel needs to be as empty and clean as possible. Your bowel prep may include medication to help clear out the contents of your colon, as well as a clear liquid diet. \n You may also need to adjust your medication schedule.",
              },
              
          ],
    },
    {
        image: d,
        name: "Diverticulitis",
        description:
          "Diverticulitis occurs when pouches begin to protrude outward from the wall of the colon, becoming infected and inflamed.It occurs when the trapped food causes infection and inflammation. ",
          questions:[
            {
              qs: "What is diverticulitis?",
              ans: "Diverticulitis occurs when pouches begin to protrude outward from the wall of the colon, becoming infected and inflamed.\n However, these pouches can protrude without becoming infected. This is known as diverticulosis, and the pouches are called diverticula. Many individuals have a number of diverticula but feel no ill effects. However, when a pouch becomes infected, it can be very painful.",
            },
            {
              qs: "What are the symptoms of diverticulitis?",
              ans: "When diverticulitis becomes inflamed, symptoms include:<br/> ● constant and usually severe pain, usually on the left side of the abdomen although occasionally on the right <br/> ● Abdominal Pain <br/> ● Bloating <br/> ● more frequent urination ",
            },
            {
                qs: "What is direct access colonoscopy?",
                ans: "Direct access colonoscopy enables primary care physicians to refer patients directly to the gastroenterology practice for a screening colonoscopy without the need for a prior office visit. You may be a good candidate for direct access colonoscopy if you’re:\n  Over 50 years of age \n        10 years younger than the youngest family member with colon cancer or polyps \n        Not experiencing gastrointestinal symptoms \n        Free from severe cardiac or pulmonary disease \n   Not at risk of bleeding \n        Free of comorbid conditions\n        To learn more about direct access colonoscopy, contact Digestive Disease Care, or talk to your primary care provider.",
              },
              {
                qs: "How do I prepare for a colonoscopy?",
                ans: "The team at Digestive Disease Care provides specific instructions on how to prepare for your colonoscopy. For them to get a good view of your colon, your bowel needs to be as empty and clean as possible. Your bowel prep may include medication to help clear out the contents of your colon, as well as a clear liquid diet. \n You may also need to adjust your medication schedule.",
              },
              {
                qs: "What happens during a colonoscopy?",
                ans: "The team at Digestive Disease Care performs your colonoscopy in a comfortable and clean environment. The entire test takes less than 30 minutes, and the team provides sedatives to keep you calm and free from discomfort during the procedure. \n Your gastroenterologist removes any polyps found along your intestinal wall and sends them to a lab for analysis. \n    After your procedure, you’re closely monitored in the recovery area as the sedatives wear off, and your gastroenterologist reviews the results of your exam. Once you’ve recovered from sedation, the team sends you home under the close supervision of a loved one. \n  Getting a colonoscopy can save your life. Call Digestive Disease Care or book an appointment online to schedule your test.",
              }
          ],
    },
    {
        image: rb,
        name: "Rectal Bleeding",
        description:
          "Rectal bleeding is a symptom of conditions like hemorrhoids, anal fissures, inflammatory bowel disease and ulcers . If, you notice rectal bleeding on toilet paper, in the water of the toilet bowl or in your stool.",
          questions:[
            {
              qs: "What is Rectal Bleeding?",
              ans: "Looking down into a toilet and seeing blood can be alarming. Your mind might go to many places as alarm bells ring that something is wrong. This is often rectal bleeding. A symptom of many different medical conditions, rectal bleeding can vary from being mild to being a sign of a serious condition like colorectal cancer. If you’re experiencing rectal bleeding, you might see blood in a few different ways — on your toilet paper as you wipe, in the water of the toilet bowl or in your poop. It can be different colors, ranging from bright red to a dark maroon to black.",
            },
            {
              qs: "What are the symptoms of rectal bleeding?",
              ans: "The symptoms of rectal bleeding can vary depending on what is causing the bleeding. Most causes of rectal bleeding are treatable and not serious. In some cases, rectal bleeding can be a symptom of a serious disease, such as colorectal cancer. Because it can be hard to know the cause of your rectal bleeding at home, it’s usually a good idea to reach out to your healthcare provider if you have rectal bleeding.\nSome symptoms you might have with rectal bleeding can include:<br/> ● Feeling rectal pain and/or pressure. <br/> ● Seeing bright red blood in or on your stool, underwear, toilet paper or in the toilet bowl <br/> ● Having stool that’s red, maroon or black in color. <br/> ● Having stool that has a tar-like appearance <br/> ● Experiencing mental confusion.<br/> ● Feeling lightheaded or dizzy. ",
            },
            {
                qs: "What causes rectal bleeding?",
                ans: "There are many different reasons why you might experience rectal bleeding. The causes of rectal bleeding can vary from common and mild conditions to more severe and rare conditions that need immediate medical treatment.\n Causes of rectal bleeding can include: <br/> ● Hemorrhoids <br/> ● Anal fissure <br/> ● Anal abscess or fistula <br/> ● Diverticulosis/Diverticulitis<br/> ● Inflammatory bowel disease (IBD) <br/> ● Ulcers",
              },
              {
                qs: "Are there any tests for rectal bleeding?",
                ans: "Tests to help diagnose the cause of rectal bleeding can include: <br/> ● Colonoscopy<br/> ● sigmoidoscopy<br/> ● fecal occult blood test",
              },
              {
                qs: "How do I treat rectal bleeding?",
                ans: "In most cases, rectal bleeding can be treated by caring for the cause of the bleeding. Rectal bleeding is often a part of a bigger issue that needs to be taken care of. Once that condition has been treated, the bleeding usually stops. Treatment options can vary depending on the condition. Conditions like anal fissures can go away on their own over time or be treated with ointments. Hemorrhoids are another common cause of rectal bleeding that can be treated by either resolving any constipation issues, changing your diet and water intake, or possibly having surgery.\n One more severe cause of rectal bleeding can be cancer. If this is the case, your healthcare provider will develop a treatment plan to treat the cancer, often removing any tumors.",
              }
          ],
    },
    {
        image: gl,
        name: "Gallstones",
        description:
          "Gallstones are parts of the bile stored in the gallbladder, such as cholesterol and bilirubin, hardened into solid matter. Symptoms can be pain in the upper abdomen, vomiting and sweating.",
          questions:[
            {
              qs: "What are Gallstones?",
              ans: "Gallstones form in your gallbladder, the small, pear-shaped organ where your body stores bile. They are pebble-like pieces of concentrated bile materials. Bile fluid contains cholesterol, bilirubin, bile salts and lecithin. Gallstones are usually made up of cholesterol or bilirubin that collect at the bottom of your gallbladder until they harden into “stones.” \n Gallstones can be as small as a grain of sand or as big as a golf ball. They grow gradually, as bile continues to wash over them and they collect extra materials. Actually, it’s the smaller stones that are more likely to cause trouble. That’s because smaller stones can travel, while bigger ones tend to stay put. Gallstones that travel may get stuck somewhere and create a blockage.",
            },
            {
              qs: "What are symptoms of gallstones?",
              ans: "The most typical symptoms of gallstones (gallstone disease) is intermittent pain in the upper abdomen, usually on the right side or centrally.\n <br/> ● The pain may be severe.<br/> ● The pain may last for as little as 15 minutes or as long as several hours.              <br/> ● The pain may also be felt between the shoulder blades or in the right shoulder.\n Sometimes patients also have vomiting or sweating.\n The pain often starts after eating, but may awaken you from sleep. \n Attacks of gallstone pain may be separated by weeks, months or even years.",
            },
            {
                qs: "What are causes of gallstones ",
                ans: "There are certain things that are known to raise the chances of getting gallstones:There are certain things that are known to raise the chances of getting gallstones: <br/> ● A greater amount of cholesterol or bilirubin in bile. <br/> ● Hormones or medications that result in decreased emptying of the gallbladder. <br/> ● Obesity<br/> ● Not having an active lifestyle <br/> ● Being female <br/> ● Diabetes <br/> ● Liver disease <br/> ● Family history of gallstones\n.",
              },
              
              {
                qs: "Treatment for gallstones",
                ans: "When gallstones are not causing symptoms, treatment is usually not needed. When there are symptoms suggestive of gallstone disease and tests show gallstones, the common course of action is surgery to remove the gallbladder.\n <br/> ● ERCP. <br/> ● Laparoscopic cholecystecomy. <br/> ● Dissolving stones. ",
              },
          
          ],
    },

    {
        image: ib,
        name: "Irritable Bowel Syndrome",
        description:
          "Irritable bowel syndrome (IBS) is one of the common disorders of the large intestine. IBS symptoms can include stomach pain, diarrhea, stomach bloating, constipation and cramping.",
          questions:[
            {
              qs: "What is irritable bowel syndrome?",
              ans: "IBS is a health issue found in your intestines (gut). While the cause of IBS is unknown, it can still be treated.\n IBS is a common health issue, impacting more than 35 million Americans. It does not cause lasting harm to the bowels and does not lead to intestinal bleeding or cancer.\n There is no sign of disease when the colon is looked at and, much like a headache or muscle strain, IBS can cause a great deal of pain and distress, even though it cannot be seen.", },
            {
              qs: "What are the symptoms of IBS?",
              ans: "Each person, based on the type of IBS they have, will have different symptoms. In general, IBS can cause: <br/> ● Belly pain.  <br/> ● Cramping in the stomach area.              <br/> ● Gas <br/> ● Bloating<br/> ● Diarrhea <br/> ● Constipation <br/> ● Urgent need to go",
            },
            {
                qs: "Getting tested for IBS?",
                ans: "To find out if you have IBS your doctor will do a few tests. Mainly, the tests will show whether you have a different health issue, such as an infection, causing your symptoms. There is no single test to make the diagnosis of IBS. If no other issue is found to be causing your symptoms, it is probably IBS, but only your doctor can confirm this.\n Your doctor will: <br/> ● Ask you about details of your symptoms. Be prepared to be specific! Try a symptom tracker to help you stay organized. <br/> ● Do a physical exam, feeling your belly. <br/> ● Take your medical history to see if anyone in your family has other GI issues.\n You doctor may: <br/> ● Do a blood test. <br/> ● Do a physical exam,feeling your belly<br/> ● Do a stool test.\n Based on the results of the blood or stool test, you may need other tests, such as a colonoscopy or endoscopy.\n If other no other health issues are found, and you are having symptoms of IBS (such as cramps, belly pain, loose stool or problems passing stool) more than three times a month for the past three months, and it is interfering with your life, your doctor may conclude that you have IBS. ",
              },
             
          ],
    },
    {
        image: be,
        name: "Barrett’s Esophagus",
        description:
          "Barrett’s esophagus is when the cells lining the esophagus — the tube connecting the mouth to the stomach — change into the cells lining the intestine. ",
          questions:[
            {
              qs: "What is Barrett’s esophagus?",
              ans: "Having Barrett’s esophagus means the cells lining the esophagus (the tube that links the mouth and the stomach) have changed into types of intestinal cells that are not normal and increase the risk of long-term problems.\nBarrett’s esophagus does not cause symptoms that you can feel. While the true cause is unknown, having heartburn that doesn’t go away could make you more likely to get Barrett’s esophagus.\n It is found through an upper GI endoscopy and biopsy (taking a small piece of tissue to look at under a microscope). The biggest worry with Barrett’s esophagus is that those who have it are at a slightly greater risk for a type of cancer forming in the esophagus.\n Once Barrett’s esophagus has been found, you should have an endoscopy done at regular intervals, suggested by your doctor, to look for pre-cancer cells (dysplasia). ",
            },
            {
              qs: "Who is at risk for Barrett’s esophagus?",
              ans: "Doctors do not know what exactly causes someone to get Barrett’s esophagus. There are a few things, though, that doctors have found could raise the chances of getting it. If you are worried that you could get Barrett’s esophagus, speak to your gastroenterologist.<br/> ● Men get Barrett’s esophagus twice as often as women. <br/> ● Caucasian men get it more often than men of other races. <br/> ● The average age at diagnosis is 55 years old. <br/> ● Between 5 and 15% of people with gastroesophageal reflux disease (GERD or reflux) get Barrett’s esophagus.<br/> ● Obesity — chiefly, high levels of belly fat — raises your chances of getting Barrett’s esophagus. <br/> ● Smoking raises your chances of getting Barrett’s esophagus. ",
            },
            {
                qs: "Tests for Barrett’s esophagu?",
                ans: "The only way to find out if you have Barrett’s esophagus is with an endoscopy and a biopsy to look at the tissue of your esophagus (the tube that links your mouth and stomach) under a microscope.\n Barrett’s esophagus can be hard to find, since it may not be in all the tissue in your esophagus. Because of this, the GI doing your endoscopy will take tissue samples (biopsies) from any areas of your esophagus that don’t look right. \n  Endoscopy \n \n An endoscopy is done to get small pieces of tissue (biopsies) from your esophagus (the tube that links your mouth and stomach) to see if the cells have changed. You will be given medicine to block pain and make you feel sleepy, so you won’t feel much during the test. \n During the endoscopy, your gastroenterologist will use a long, thin (about the width of your little finger), flexible tube that has a tiny camera on the end.\n After the test, a pathologist (a doctor who studies tissue) will look at the tissue in a lab to find out if Barrett’s esophagus cells are there.    ",
              },
             
          ],
    },
    {
      image: hp,
      name: "H. Pylori Infection",
      description:
        "H. pylori are bacteria that can cause an infection in the stomach or duodenum. H. pylori can also inflame and irritate the stomach lining (gastritis).",
        questions:[
          {
            qs: "What is an H. pylori infection  ?",
            ans: "H. pylori (Helicobacter pylori) are bacteria that can cause an infection in the stomach or duodenum (first part of the small intestine). It’s the most common cause of peptic ulcer disease. H. pylori can also inflame and irritate the stomach lining (gastritis). Untreated, long-term H. pylori infection can lead to stomach cancer (rarely). ",
          },
          {
            qs: "Who gets H. pylori infections?  ",
            ans: "H. pylori bacteria are present in some 50% to 75% of the world’s population. It does not cause illness in most people. H. pylori infection mostly occurs in children. It’s more common in developing countries. In the U.S., H. pylori bacteria are found in about 5% of children under the age of 10. Infection is most likely to occur in children who live in crowded conditions and areas with poor sanitation.            ",
          },
          {
              qs: "Can H. pylori spread from person to person?              ",
              ans: "Yes, H. pylori can spread from person to person. H. pylori are found in saliva, plaque on teeth and poop. Infection can be spread through kissing and by transferring the bacteria from the hands of those who have not thoroughly washed them after a bowel movement.              ",
            },
            {
              qs: " Symptoms of H. pylori infection              ",
              ans: "Most children with H. pylori infection don’t have symptoms. Only about 20% do. \n Symptoms and signs, if present, are those that arise from gastritis or peptic ulcer and include: <br/> ●  Dull or burning pain in your stomach (more often a few hours after eating and at night). Your pain may last minutes to hours and may come and go over several days to weeks.  <br/> ● Bloating. <br/> ● Burping <br/> ● Unplanned weight loss. <br/> ● Nausea and vomiting (bloody vomit).  ",
            },
            {
              qs: "How is H. pylori infection diagnosed?",
              ans: "If your healthcare provider suspects H. pylori bacteria may be causing a stomach ulcer, they may order one or more of the following tests: <br/> ● A breath test: In this test, you exhale into a bag before and after drinking a solution. The test measures the amount of carbon dioxide released in your breath before and after drinking the solution. A higher level after drinking the solution means H. pylori are present. <br/> ● A stool test: This test looks for evidence of H. pylori in a stool sample.  <br/> ● Upper endoscopy: A flexible tube is inserted down the throat into the stomach. A small tissue sample from the stomach or intestine lining is taken for testing for the presence of H. pylori.   ",
            },
            {
              qs: "How is H. pylori treated?              ",
              ans: "If you don’t have symptoms, you don’t need to be treated. If you've been diagnosed with H. pylori, avoid taking nonsteroidal anti-inflammatory drugs. These drugs can increase your risk of developing an ulcer. \n H. pylori-caused ulcers are treated with a combination of antibiotics and an acid-reducing proton pump inhibitor. <br/> ● Antibiotics: Usually two antibiotics are prescribed. Among the common choices are amoxicillin, clarithromycin (Biaxin®), metronidazole (Flagyl®) and tetracycline. <br/> ● Proton pump inhibitor: Commonly used proton pump inhibitors include lansoprazole (Prevacid®), omeprazole (Prilosec®), pantoprazole (Protonix®), rabeprazole (Aciphex®) or esomeprazole (Nexium®). <br/> ● Bismuth subsalicylate: Sometimes this drug (eg, Pepto-Bismol®) is added to the antibiotics plus proton pump inhibitor combinations mentioned above. This drug protects the stomach lining.              ",
            },
           
           
        ],
  },
    
    // {
    //     image: gi,
    //     name: "Gluten Intolerance",
    //     description:
    //       "djkajti iautoaii vkaheoiw nviahen hviahe vidknfwkq voidnqpv viewnpq n vowpq vjihqp ivpqh  jivwqp  viewph vfoa  hiqp  ivjewpo nijewp e fpjwoi wejvwoew  jiewpq jifqp f fpiwq f",
    //       questions:[
    //         {
    //           qs: "What is a endoscopy?",
    //           ans: "A colonoscopy is a diagnostic procedure that allows the gastroenterology team at  Digestive Disease Care to evaluate your colon. During the procedure, the team uses a thin, flexible tube equipped with a light, camera, and surgical tools, referred to as a colonoscope, to examine the lining of your entire large intestines.",
    //         },
    //         {
    //           qs: "Why do I need a colonoscopy?",
    //           ans: "The gastroenterology team at Digestive Disease Care may recommend a colonoscopy for several reasons. You may need the diagnostic procedure to determine the underlying cause of your gastrointestinal symptoms, such as:\n  Abdominal pain \n  Change in bowel habits   \n Anemia   \n  Weight loss  \n  Rectal bleeding  \n  The team may also recommend a colonoscopy to remove colon polyps, which are benign growths that occur on the wall of your intestines that may turn cancerous. The diagnostic test is also a colon cancer screening tool.",
    //         },
    //         {
    //             qs: "What is direct access colonoscopy?",
    //             ans: "Direct access colonoscopy enables primary care physicians to refer patients directly to the gastroenterology practice for a screening colonoscopy without the need for a prior office visit. You may be a good candidate for direct access colonoscopy if you’re:\n  Over 50 years of age \n        10 years younger than the youngest family member with colon cancer or polyps \n        Not experiencing gastrointestinal symptoms \n        Free from severe cardiac or pulmonary disease \n   Not at risk of bleeding \n        Free of comorbid conditions\n        To learn more about direct access colonoscopy, contact Digestive Disease Care, or talk to your primary care provider.",
    //           },
    //           {
    //             qs: "How do I prepare for a colonoscopy?",
    //             ans: "The team at Digestive Disease Care provides specific instructions on how to prepare for your colonoscopy. For them to get a good view of your colon, your bowel needs to be as empty and clean as possible. Your bowel prep may include medication to help clear out the contents of your colon, as well as a clear liquid diet. \n You may also need to adjust your medication schedule.",
    //           },
    //           {
    //             qs: "What happens during a colonoscopy?",
    //             ans: "The team at Digestive Disease Care performs your colonoscopy in a comfortable and clean environment. The entire test takes less than 30 minutes, and the team provides sedatives to keep you calm and free from discomfort during the procedure. \n Your gastroenterologist removes any polyps found along your intestinal wall and sends them to a lab for analysis. \n    After your procedure, you’re closely monitored in the recovery area as the sedatives wear off, and your gastroenterologist reviews the results of your exam. Once you’ve recovered from sedation, the team sends you home under the close supervision of a loved one. \n  Getting a colonoscopy can save your life. Call Digestive Disease Care or book an appointment online to schedule your test.",
    //           }
    //       ],
    // },
    {
        image: uc,
        name: "Ulcerative Colitis",
        description:
          "Ulcerative colitis is inflammatory bowel disease that causes persistent inflammation and painful ulcers to develop in the innermost lining of your digestive tract.",
          questions:[
            {
              qs: "What is an Ulcerative colitis(UC)?",
              ans: "Ulcerative colitis (UC) causes irritation and ulcers (open sores) in your large intestine. It belongs to a group of conditions called inflammatory bowel disease (IBD). It often causes diarrhea with blood, cramping and urgency. Sometimes, these symptoms can wake you up at night to go to the bathroom. \n The inflammation in ulcerative colitis usually starts in your rectum, which is close to your anus (where poop leaves your body). The inflammation can spread and affect a portion of your entire colon. When the inflammation occurs in your rectum and lower part of your colon, it’s called ulcerative proctitis. If your entire large intestine is affected, it’s called pancolitis. If only the left side of your colon is affected, it’s called limited or distal colitis. ",
            },
           
        
              {
                qs: "What are the symptoms of Ulcerative Colitis?",
                ans: "Ulcerative colitis symptoms often get worse over time. In the beginning, you may notice: <br/> ● Diarrhea  <br/> ● Abdominal cramping <br/> ● Tiredness <br/> ● Nausea <br/> ● Weight loss <br/> ● Anemia\n Later you may also have: <br/> ● Fever <br/> ● Skin rashes <br/> ● Mounth sores <br/> ● Joint Pain <br/> ● Red, painful eyes",
              },
              {
                qs: "How is ulcerative colitis diagnosed?",
                ans: "To diagnose ulcerative colitis in children, teenagers and adults, your healthcare provider has to rule out other illnesses. After a physical exam, they may order:<br/> ● Blood test <br/> ● Stool samples <br/> ● Imaging tests <br/> ● Endoscopic tests",
              },

              {
                qs: "How is ulcerative colitis treated",
                ans: "There’s no cure for ulcerative colitis, but treatments can calm the inflammation, help you feel better and get you back to your daily activities. Treatment also depends on the severity and the individual, so treatment is crafted for each person’s needs. Usually, healthcare providers manage the disease with medications. If your tests reveal infections are causing problems, your healthcare provider will treat those underlying conditions and see if that helps.\n The goal of medication is to induce and maintain remission, as well as to improve the quality of life for people with ulcerative colitis. Healthcare providers use several types of medications to calm inflammation in your large intestine. Reducing the swelling and irritation lets the tissue heal. It can also relieve your symptoms so you have less pain and less diarrhea. ",
              }
          ],
    },
    {
      image: sibo,
      name: "SIBO",
      description:
        "SIBO is a condition where there is an overgrowth of bacteria in the small intestine, causing symptoms such as bloating, abdominal pain, and digestive issues.",
        questions:[
          {
            qs: "What is SIBO (small intestinal bacterial overgrowth)            ?",
            ans: "SIBO stands for “small intestinal bacterial overgrowth”. It means that the bacteria that live in your small intestine are overgrown and the things that normally maintain balance among your gut flora aren’t working. It’s normal and healthy to have bacteria living in your small intestine, but too many can cause problems with your digestion — especially if they're the wrong kind. The wrong bacteria can overwhelm the beneficial bacteria that you need to be there, and they can upset your digestive system by feeding on products that aren’t meant for them.  ",
          },
         
      
            {
              qs: "How does SIBO occur?  ",
              ans: "Your body maintains the balance of flora in your gut through a complex network of chemical and mechanical functions. For SIBO to occur, one or more of these functions must be failing. Gastric acid, bile, enzymes and immunoglobulins are some of the chemicals that control bacteria in the small intestine. Different conditions can inhibit these chemical functions. The emptying of food contents from the small intestine into the large intestine is another important cleansing mechanism. If this mechanism is slowed or impaired, the bacteria in the small intestine have more time to breed, and the bacteria in the large intestine may begin to creep upward. ",
            },
            {
              qs: "How does SIBO affect my body?  ",
              ans: " Bacteria in the small intestine digest carbohydrates and convert them into gas and short-chain fatty acids. More bacteria can mean more gas and other byproducts, which often triggers diarrhea. The bacteria also consume proteins and vitamin B12 meant for us, and bile salts that are supposed to be there to help you digest fats. All of this leads to poor digestion of fats and poor absorption of nutrients, especially calcium and fat-soluble vitamins. The result is a variety of gastrointestinal symptoms in the short term, and malnutrition in the longer term. Over time, vitamin and mineral deficiencies can cause lasting damage to your bones and nervous system.   ",
            },

            {
              qs: "What are the symptoms of SIBO? ",
              ans: "SIBO symptoms can resemble a variety of other gastrointestinal conditions, and often another condition has contributed to SIBO. You may experience some or many of these, depending on the severity of your condition: <br/> ● Abdominal pain. <br/> ● Abdominal distension. <br/> ● Nausea. <br/> ● Gas. <br/> ● Bloating. <br/> ● Fatigue.",
            },
            {
              qs: " How do I know if I have SIBO or IBS?  ",
              ans: "SIBO and IBS share many symptoms, and you can have both. The main difference is that bacterial overgrowth can be clinically verified and treated. IBS, on the other hand, is a functional disorder that is diagnosed when your symptoms can’t be clinically explained.\n When you seek a medical diagnosis for your symptoms, you’ll probably be tested for SIBO as well as other comparable conditions, such as lactose intolerance. If you test positive, you can be treated for those conditions, and hopefully, your symptoms will go away.\n If they don’t all go away, you may have another condition. If no discernable cause can be found, that’s when you’ll be diagnosed with IBS. Sometimes, IBS is found to be a contributing cause of SIBO.",
            },
            {
              qs: " How is SIBO diagnosed? ",
              ans: "The symptoms of SIBO overlap with many other gastrointestinal conditions, some of which you may already have. So when you seek a medical diagnosis, SIBO might not be the first thing your healthcare provider suspects. If, however, your symptoms and medical history suggest SIBO, your healthcare provider may suggest a breath test to verify it. This simple, non-invasive test measures hydrogen and/or methane levels in your breath to determine the presence of gas-producing bacteria in your gut. If your levels are above a certain number, it suggests an abundance of bacteria.\ Your healthcare provider may suggest additional tests to look for signs of causes and complications of SIBO, including: <br/> ● Blood tests for vitamin deficiencies and blood protein deficiencies. <br/> ● A stool test (poop inspection) for excess undigested fats or bile acids.  <br/> ● Imaging tests to check for structural problems.  ",
            },
            {
              qs: " How is SIBO diagnosed? ",
              ans: "The symptoms of SIBO overlap with many other gastrointestinal conditions, some of which you may already have. So when you seek a medical diagnosis, SIBO might not be the first thing your healthcare provider suspects. If, however, your symptoms and medical history suggest SIBO, your healthcare provider may suggest a breath test to verify it. This simple, non-invasive test measures hydrogen and/or methane levels in your breath to determine the presence of gas-producing bacteria in your gut. If your levels are above a certain number, it suggests an abundance of bacteria.\ Your healthcare provider may suggest additional tests to look for signs of causes and complications of SIBO, including: <br/> ● Blood tests for vitamin deficiencies and blood protein deficiencies. <br/> ● A stool test (poop inspection) for excess undigested fats or bile acids.  <br/> ● Imaging tests to check for structural problems.  ",
            },
            {
              qs: " How do you fix SIBO?              ",
              ans: "SIBO is often a complication of another condition, and often causes complications of its own. When treating SIBO, healthcare providers need to address: <br/> ● The overgrowth itself <br/> ● The complications of SIBO. <br/> ● The underlying cause. \n \n A course of antibiotics is the standard medical treatment for bacterial overgrowth. Healthcare providers will then seek to manage your most acute complications. This might mean nutritional support and supplementation for vitamin and mineral deficiencies. It might mean a strict short-term diet to manage symptoms and then a modified longer-term diet plan to replenish your nutrition and keep bacterial overgrowth in check.\n \n Ultimately, healthcare providers will want to locate and treat the underlying cause of your SIBO. This may require additional testing. If they suspect you have a motility disorder, they might prescribe motility agents to help stimulate the process and keep things moving. If they identify a structural problem, they might recommend surgery to correct it.  ",
            },
            
        ],
  },
  {
    image: colon,
    name: "Colon Polyps",
    description:
      "A colon polyp is a small clump of cells that forms on the lining of the colon. Most colon polyps are harmless. But over time, some colon polyps can develop into colon cancer.   ",
      questions:[
        {
          qs: " What are colon polyps ?",
          ans: "A colon polyp is a growth on the inner lining of the colon (large intestine) or rectum. A polyp can have a variety of shapes and be flat, slightly raised (called sessile) or on a stalk (called pedunculated). There are different microscopic types of polyps (which require a microscope to determine), and the adenomas or sessile serrated polyps can eventually grow over time and become cancer. Undergoing colorectal cancer screening and removal of polyps can decrease the risk of developing colorectal cancer.  ",
        },
       
    
          {
            qs: "What causes colon polyps and who gets them?  ",
            ans: "Polyps are found in about 30% of the adult population over the age of 45-50. Men and women of all ethnicities are at risk of colon polyps and colon cancer. \n A polyp is the result of genetic changes in the cells of the colon lining that affect the normal cell life cycle. Many factors can increase the risk or rate of these changes. Factors are related to your diet, lifestyle, older age, gender and genetics or hereditary issues. Important lifestyle factors predisposing to colorectal polyps and cancer (making you more liable to get these conditions) include: <br/> ● Smoking.   <br/> ● Excess alcohol ingestion (drinking too much alcohol). <br/> ● Not exercising. <br/> ● Eating processed foods and too much red meat (instead of a mostly plant-based food plan).  ",
          },
          {
            qs: "What are the symptoms of colon polyps? ",
            ans: "Most colon polyps and early, curable colorectal cancer do not have any symptoms, which is why screening is recommended. However, when symptoms do occur, they may include: <br/> ● Bleeding from the rectum (the last part of the digestive tract that enables stool to leave the body), which can be seen with the naked eye or detected microscopically by fecal blood test or a fecal blood test combined with a genetic stool test. <br/> ● Unexplained iron deficiency anemia or weight loss. <br/> ●  Change in normal bowel movement pattern.  <br/> ● Abdominal pain (rare). ",
          },

          {
            qs: "How are colon polyps diagnosed?  ",
            ans: "A doctor can find colon polyps in several different ways, including: <br/> ● Colonoscopy: A procedure in which a long, thin, flexible tube is placed through the rectum and into the large intestine. The tube has a camera that shows images on a screen and allows polyps to be removed. <br/> ● Sigmoidoscopy: A thin, flexible tube is inserted through the rectum to examine the last third of the large intestine (sigmoid colon). <br/> ● Computerized tomography (CT) scan: A radiology test that uses radiation to create pictures of the large intestine. <br/> ● Stool tests: You provide the lab with a stool sample, which will be tested for blood or genetic changes suggestive of polyps and cancer. If the test is positive, a colonoscopy is needed.           ",
          },
          
          {
            qs: " What happens if you have a colon polyp? ",
            ans: "When a colon polyp is found, your doctor will remove it (polypectomy) and test it in the laboratory to see what microscopic type it is (biopsy). Your doctor will determine when you should have a repeat screening test based on the number, size and microscopic analysis of polyps, in addition to your other risk factors.",
          },
          {
            qs: " Can colon polyps and colorectal cancer be prevented?            ",
            ans: " <br/> ● Avoid excess alcohol and do not smoke tobacco. <br/> ● Lose any extra weight to normalize your body mass index. <br/> ● Exercise—including at least 150 minutes of moderate aerobic activity and 2 sessions of muscle strengthening per week.<br/> ● Low-dose aspirin every day has been shown to decrease colorectal polyps and cancer. Aspirin can have side effects. The use, risks and benefits of aspirin should be discussed with your doctor.",
          },
          
          
      ],
},
{
  image: am,
  name: "Amoebiasis",
  description:
    " Amebiasis is an infection caused by a parasite that your body sheds through stool. When the parasite gets into your intestine, it can cause symptoms like cramping and diarrhea ",
    questions:[
      {
        qs: " What is amebiasis?        ",
        ans: "Amebiasis, or amoebic dysentery, is a gastrointestinal illness that develops when an organism called a parasite enters your intestines. The illness may cause diarrhea, nausea, stomach cramps and fever. Healthcare providers usually treat it with antibiotics. ",
      },
     
  
        {
          qs: "What are the symptoms of amebiasis?       ",
          ans: " Not everyone who has an amebiasis infection gets sick. You might not have any amebiasis symptoms, especially when you’re first infected. You may develop symptoms within four weeks after infection. Symptoms include:<br/> ● Cramping. <br/> ● Fever. <br/> ● Loose Stool. <br/> ● Diarrhea \n E. histolytica can live in your intestines for a long time, even if you don’t develop symptoms. If you’ve traveled to an area with unsanitary conditions, ask your healthcare provider if you should undergo testing.     ",
        },
        {
          qs: "What causes amebiasis?  ",
          ans: "The parasite E. histolytica causes amebiasis. A parasite is an organism that lives in or on another organism, known as its host. The parasite gets its nutrition from the host. When a parasite lays eggs, the eggs develop into mature cysts inside the host.\n \n If you’re infected with this parasite, cysts leave your body through your stool. Then, anyone who comes into contact with a tiny amount of your infected stool can also become infected.          ",
        },

        {
          qs: "How do healthcare providers diagnose amebiasis?          ",
          ans: "If you have symptoms, your provider does a physical examination. They talk with you about: <br/> ● Any recent travel and where you’ve gone. <br/> ● Your sexual history.          ",
        },
        {
          qs: " What tests do healthcare providers use to diagnose amebiasis?          ",
          ans: "A healthcare provider looks at a stool sample under a microscope. The parasite that causes amebiasis isn’t present in all stool samples. You may need to provide more than one sample. A provider may also take a blood sample to look for certain antibodies.\n If you have severe symptoms that indicate the infection has reached your bloodstream, your healthcare provider may recommend: <br/> ● Blood tests to check your liver function.  <br/> ● Colonoscopy. <br/> ● Ultrasound.    ",
        },
        {
          qs: " How is amebiasis cured?          ",
          ans: "Amebiasis treatment includes antibiotics, which can cure the infection. The antibiotics your provider prescribes depends on whether you’re experiencing symptoms. If you don’t have symptoms, you may need one type of antibiotics. If you do have symptoms, you may need to take two different antibiotics.    ",
        },
        {
          qs: " How can I reduce my risk of amebiasis?       ",
          ans: "You can reduce your risk of amebiasis infection by being careful about what you eat and drink when traveling to areas with poor sanitation. You should: <br/> ● Avoid eating raw fruits and vegetables. Peel and wash produce before cooking.  <br/> ● Avoid drinks with ice cubes. <br/> ● Drink only sealed bottled water (or boil water before you drink it if bottled water is unavailable). <br/> ● Wash your hands frequently with soap and water after using the toilet or changing a baby’s diaper. <br/> ● Use condoms and safe sex practices to reduce your exposure to feces during sexual activity. \n If you do experience symptoms, see your provider right away. Waiting too long for treatment can lead to complications and severe illness.          ",
        },

       
        
        
    ],
},
{
  image: cb,
  name: "Campylobacter Infection  ",
  description:
    " Campylobacter infection is a type of stomach flu (gastroenteritis). Some people call it food poisoning. The most common symptoms are diarrhea, vomiting, stomach cramping and fever.",
    questions:[
      {
        qs: "What is Campylobacter infection?        ",
        ans: "Campylobacter infection is a type of stomach flu (gastroenteritis). Some people call it food poisoning. The most common symptoms are diarrhea, vomiting, stomach cramping and fever. \n \n This foodborne illness starts after someone eats or drinks something that has Campylobacter bacteria in it. If you take in enough bacteria, you may become infected. Usually, symptoms show up one to seven days after coming into contact with the bacteria.        ",
      },
     
  
        {
          qs: " How do you get Campylobacter infection?          ",
          ans: " A Campylobacter infection starts after someone eats or drinks something with the bacteria. Uncooked or undercooked food can lead to an infection. Some common foods that can have Campylobacter are: <br/> ● Chicken. <br/> ● Dairy products that have not been pasteurized (sterilized to kill bacteria).          <br/> ● Produce. <br/> ● Seafood.  \n You can also get the bacteria from accidentally touching the waste (poop) of an infected animal. Cats and dogs can both carry Campylobacter. And some people have gotten infected after handling puppies for sale at a pet store. Always make sure you wash your hands after cleaning up after an infected pet or handling unfamiliar animals. \n Older people and the very young have the highest infection risk. Also, people with weaker immune systems can more easily get infected. Weakened immune systems can come from cancer treatment, immunodeficient states, being a smoker or drinking large amounts of alcohol.  ",
        },
        {
          qs: "What causes amebiasis?  ",
          ans: "The parasite E. histolytica causes amebiasis. A parasite is an organism that lives in or on another organism, known as its host. The parasite gets its nutrition from the host. When a parasite lays eggs, the eggs develop into mature cysts inside the host.\n \n If you’re infected with this parasite, cysts leave your body through your stool. Then, anyone who comes into contact with a tiny amount of your infected stool can also become infected.          ",
        },

        {
          qs: "What are Campylobacter symptoms?          ",
          ans: "  A Campylobacter infection has symptoms that you would expect with so-called stomach flu (which is not the same as influenza, a respiratory illness). You may have: <br/> ● Diarrhea.  <br/> ● Fever. <br/> ● Headache. <br/> ● Stomach cramps. \n Not everyone will get sick. Those who do get sick usually start feeling ill one to seven days after infection. Symptoms last about one week. ",
        },
        {
          qs: "How is Campylobacter infection diagnosed?          ",
          ans: "The most common test to detect a Campylobacter infection uses a stool sample. Your healthcare provider sends a sample of your poop to the lab, where technicians test it for the bacteria. \n In extremely rare cases, the bacteria can get into your blood. If this happens, it can cause a life-threatening infection. Your healthcare provider will order a blood test to check if this has happened. ",
        },
        {
          qs: " How is Campylobacter infection treated?          ",
          ans: "For most cases of food poisoning, there is no specific treatment. The illness will run its course in about a week. If your healthcare provider can confirm a Campylobacter infection, antibiotics may be prescribed to help speed up recovery.\n  Your healthcare provider will recommend drinking more fluids because diarrhea and vomiting can both cause dehydration. Also, make sure you replenish electrolytes — essential minerals, such as sodium, calcium and potassium. A sports drink can help with electrolytes.          ",
        },
        {
          qs: " How can I reduce my risk of amebiasis?       ",
          ans: "You can reduce your risk of amebiasis infection by being careful about what you eat and drink when traveling to areas with poor sanitation. You should: <br/> ● Avoid eating raw fruits and vegetables. Peel and wash produce before cooking.  <br/> ● Avoid drinks with ice cubes. <br/> ● Drink only sealed bottled water (or boil water before you drink it if bottled water is unavailable). <br/> ● Wash your hands frequently with soap and water after using the toilet or changing a baby’s diaper. <br/> ● Use condoms and safe sex practices to reduce your exposure to feces during sexual activity. \n If you do experience symptoms, see your provider right away. Waiting too long for treatment can lead to complications and severe illness.          ",
        },
        {
          qs: " How can I prevent Campylobacter infection?          ",
          ans: " You can avoid getting food poisoning from Campylobacter with a bit of precaution. To avoid getting sick, wash your hands: <br/> ● After blowing your nose, coughing or sneezing. <br/> ● After using the toilet, changing diapers or cleaning up a child who used the bathroom.  <br/> ● Before and after taking care of someone who is sick. <br/> ● After petting cats and dogs or cleaning up their poop. <br/> ●  After touching garbage. \nYou should disinfect toilets after use by someone who has diarrhea. If you have diarrhea, you should wash your hands frequently with warm, soapy water \n When it comes to food safety, always wash your hands before handling food and after handling raw food. These tips also help: <br/> ● Avoid getting bacteria on other foods by using separate cutting boards for chicken/meat and vegetables. <br/> ● Cook meat (especially chicken) until there is no pink. If you go to a restaurant, send chicken back to the kitchen if it still has pink. <br/> ● Don’t drink water if you don’t know if it has been tested for purity — including water from streams. ",
        },

       
        
        
    ],
},
{
  image: cd,
  name: "Clostridioides difficile",
  description:
    "Clostridioides difficile (also known as C. difficile or C. diff.) is a bacterium that causes colitis, or inflammation (swelling) of the colon.   ",
    questions:[
      {
        qs: " What is Clostridioides difficile??",
        ans: "Clostridioides difficile (pronounced klos-TRID-e-OY-dees dif-uh-SEEL), also known as C. diff. or C. difficile), is a germ that can cause diarrhea or a more serious intestinal condition such as colitis. ",
      },
     
  
        {
          qs: "What causes Clostridioides difficile?          ",
          ans: "When a person takes antibiotics, the “good germs” in the intestines are killed off making it easier to become infected by the Clostridioides difficile germ. The germ is found in stool (bowel movement), and is spread to other people by unwashed hands, contaminated surfaces, or objects. \n \n In a healthcare setting, the germs have been found on objects such as toilets, bathroom fixtures, bed rails, and rectal thermometers. The germ is able to survive for a very long time on a variety of surfaces.       ",
        },
        {
          qs: "What are the symptoms of Clostridioides difficile?  ",
          ans: "Symptoms may include:  <br/> ● Watery diarrhea. <br/> ● Fever. <br/> ● Loss of appetite.          <br/> ● Stomach (belly) pain or tenderness.          ",
        },

        {
          qs: "How is Clostridioides difficile infection diagnosed?          ",
          ans: "Clostridioides difficile is diagnosed by testing the stool of patients who are having frequent liquid diarrhea such as 3 or more stools in a 24 hour period. In a severe case, a procedure called flexible sigmoidoscopy may be performed to confirm that the lower part of the intestine (colon) is inflamed. In this procedure a long, thin tube called a sigmoidoscope is placed inside the intestine to allow a doctor to visually examine the colon.  ",
        },
        {
          qs: " How is Clostridioides difficile infection treated?          ",
          ans: "Clostridioides difficile is usually treated with antibiotics prescribed by your healthcare provider. In rare severe cases, a person might need to have surgery to remove the infected part of the intestine. Patients who have Clostridioides difficile infection should not use drugs to control diarrhea unless prescribed by their healthcare provider as this could make the infection worse.",
        },
       
        
        
    ],
},
{
  image: gia,
  name: "Giardiasis",
  description:
    "Giardiasis is a common illness caused by a parasite that may result in diarrhea and stomach cramps. The Giardia parasite can spread through contaminated water, food and surfaces, and from contact with someone who has it.   ",
    questions:[
      {
        qs: " What is Giardia",
        ans: "Giardia intestinalis is a microscopic parasite (too small to see with the naked eye). It can affect humans and animals, such as dogs, cats and wild animals. A parasite is an organism that needs another organism (like a person or animal) to survive. ",
      },
      {
        qs: " What is giardiasis?",
        ans: "Giardiasis (JEE-are-die-uh-sis) an infection caused by the parasite Giardia. After someone comes into contact with the parasite, the parasite can live in their intestines. It may make you sick. ",
      },
     
  
        {
          qs: "How common is giardiasis?          ",
          ans: "Giardia parasites live around the world, in most countries and continents. It tends to be a bigger problem in countries with poor sanitation, such as developing countries. But you can get it almost anywhere.  ",
        },
        

        {
          qs: " What causes giardiasis?          ",
          ans: "Giardiasis is caused by the parasite Giardia intestinalis.          ",
        },
        {
          qs: " How is giardiasis spread?          ",
          ans: "Giardiasis can spread through food or water. It also spreads via surfaces contaminated with Giardia cysts, or hard shells that contain the parasite. Even though parasites need a host (another living thing) to survive, Giardia's shell enables the parasite to live on its own for extended periods.\n \n People commonly get giardiasis from swallowing the parasite in untreated water. Giardiasis travels in even trace amounts of infected stool (poop) — amounts so small you can’t see it. If you have giardiasis, you can spread it to someone else, even if you have no symptoms. \n \n You can get giardiasis through:<br/> ● Drinking from untreated water sources (such as lakes, streams or swimming pools). <br/> ● Traveling to countries with poor sanitation practices.<br/> ● Working closely with young children (such as in a child care center).<br/> ● Swallowing the parasite after touching a surface (such as a doorknob or toy) contaminated with tiny amounts of infected feces.    ",
        },
        
        {
          qs: " What are the symptoms of giardiasis?          ",
          ans: "Giardiasis usually causes digestive symptoms, such as diarrhea or stomach cramps. Symptoms may be mildly irritating or severe. Some people have no symptoms. \n Giardiasis symptoms include: <br/> ● Diarrhea (watery or greasy stools). <br/> ● Fatigue (feeling overly tired for a long time). <br/> ● Unsettled stomach or nausea. <br/> ● Stomach cramps. <br/> ● Gas or Bloating. <br/> ● Dehydration.        ",
        },
        {
          qs: " How is giardiasis diagnosed?   ",
          ans: " Healthcare providers can diagnose giardiasis by testing your stool for the Giardia parasite. The parasite may not show up in every stool sample. For that reason, your provider may need more than one sample to confirm a diagnosis.\n \nIf you have severe symptoms, your provider may examine your intestines using a thin, flexible tube. This procedure is called an upper endoscopy. The parasites are often seen when the tiny pieces of biopsies obtained during endoscopy are examined by a lab. Your provider may also take a sample of the contents of your intestine to look for parasites.          ",
        },
        {
          qs: " How can giardiasis  be prevented?          ",
          ans: " Giardia parasites are microscopic (too tiny to see without a microscope). It’s hard to avoid something you can’t see. But there are several ways you can minimize your risk of getting giardiasis.\n Wash your hands often.\n Wash your hands often with soap and clean, running water for at least 20 seconds. Always wash your hands: <br/> ● Before and after you eat. <br/> ● After using the toilet. <br/> ● After coming in contact with your own or someone else’s germs (such as changing a diaper). \n \n Only drink from safe water sources. \n Water can contain parasites, even if it looks clean. Do not drink untreated water, such as from wells, pools, lakes or rivers. If you have any concern about water contamination, don’t drink it. When in doubt, choose bottled water if it’s available. Or boil water for five minutes to kill any parasites.\n \n Know the basics of food safety.\n  Washing all fruits and vegetables under hot water can prevent giardiasis. Do not eat raw or undercooked meat. Be especially cautious in countries where the water and food may be contaminated. \n \n Practice safe sex. \n Practicing safe sex can prevent a wide range of sexually transmitted infections. To prevent giardiasis, use protection during oral-anal sex, and wash your hands right after sex. These practices can ensure you don’t come into contact with infected feces.          ",
        },
        
       
        
        
    ],
    
},
{
  image: sal,
  name: "Salmonella",
  description:
    "Salmonella is the type of bacteria that’s the most frequently reported cause of food-related illness in the United States. You can’t see, smell, or taste it.    ",
    questions:[
      {
        qs: "What Is Salmonella?        ",
        ans: "Salmonella is the type of bacteria that’s the most frequently reported cause of food-related illness in the United States. You can’t see, smell, or taste it. \n Illness from these bacteria is officially called salmonellosis. It can cause an upset stomach, diarrhea, fever, and pain and cramping in your belly. Most people get better on their own at home within 4 to 7 days.        ",
      },
      {
        qs: " What causes Salmonella?",
        ans: "People and animals can carry salmonella in their intestines and their feces. The bacteria often spread through contaminated foods. Common food sources of salmonella infection include: <br/> ● Raw and undercooked meat, including chicken, turkey, duck, beef, veal, and pork. <br/> ● Raw fruits or vegetables. <br/> ● Unpasteurized milk and other dairy products, including soft cheese, ice cream, and yogurt. <br/> ● Processed foods like chicken nuggets and nut butters.\n \n  You can also get salmonella directly through: <br/> ● Poor handwashing. You might pass along the bacteria by not washing your hands well after using the bathroom or changing a diaper. <br/> ● Pets. Animals like dogs, cats, birds, and reptiles can carry the bacteria. ",
      },
     
  
        {
          qs: " What are the symptoms of Salmonella poisoning?        ",
          ans: "Symptoms of salmonella appear anywhere from a few hours to a few days after exposure to Salmonella bacteria. Symptoms of salmonella affect your stomach and intestines (GI tract) and include: <br/> ● Diarrhea. <br/> ● Fever. <br/> ● Stomach Pains. <br/> ● Headache.          ",
        },
        

        {
          qs: " How salmonella diagnosed?          ",
          ans: " Salmonella is diagnosed with a test of your stool (poop), blood or other sample. Your healthcare provider will give you a physical exam and ask you about your symptoms and health history. Following tests are to be done to diagnose salmonella: <br/> ● Stool sample. You usually give a sample of your poop (stool) from the privacy of your own home. Your healthcare provider will give you a sterile container and instructions on how to collect a sample. A lab will test the sample for signs of Salmonella bacteria. <br/> ● Blood sample. Your provider will collect blood with a needle from your arm. A lab will culture (try to grow) Salmonella bacteria from your blood sample. <br/> ● Other samples. Your provider might use other body fluids or tissues, like pee (urine) or a sample taken from a wound (abscess) to test for Salmonella.          ",
        },
        {
          qs: "  How is salmonella treated?          ",
          ans: " You usually don’t treat salmonella with medication. If you’re severely ill or at high risk for complications, your healthcare provider will treat you with antibiotics. If you have severe diarrhea, you may need to be hospitalized. \n  You should drink plenty of fluids. Your provider may give you IV fluids if you’re dehydrated.   ",
        },
        {
          qs: "  Salmonella Prevention          ",
          ans: " Salmonella can hide in a variety of foods, but you can do a lot of things to help ensure the bacteria stay away:<br/> ● Don’t eat raw or barely cooked eggs or meat.   <br/> ● Don’t eat or drink anything with unpasteurized milk or juice. <br/> ● Don’t wash raw poultry, meat, or eggs before cooking. <br/> ● Wash raw fruits and vegetables well, and peel them if possible. <br/> ● Don’t prepare food for other people if you’re vomiting or have diarrhea. <br/> ● Refrigerate food properly, both before cooking it and after serving it.<br/> ● Wash your hands well with soap and warm water before and after handling food.<br/> ● Keep kitchen surfaces clean before preparing food on them.<br/> ● Don’t mix cooked food with raw food or use the same utensils to prepare them. For example, don’t use the same knife to cut raw chicken and then to slice mushrooms, and use different plates or cutting boards to slice them on.         ",
        },
        
       
        
        
    ],
    
},
{
  image: shi,
  name: "Shigellosis",
  description:
    "Shigella infection, also called shigellosis, is a condition that affects your digestive system. The bacteria causes possibly bloody diarrhea.    ",
    questions:[
      {
        qs: "What is Shigella infection?        ",
        ans: "Shigellosis, or Shigella infection caused by Shigella bacteria, is a disease that affects your digestive system. It produces stomach pain, diarrhea and fever in people who are infected. Shigella is very contagious. There are various types in the Shigella bacteria group.\n You can get shigellosis by eating contaminated food or drinking contaminated water. If you swim in contaminated water, you may get shigellosis by accidentally swallowing water that you’re swimming in.\n Shigella infection, a type of food poisoning, may also be called bacillary dysentery. Dysentery is a word for diarrhea that contains blood or mucus.        ",
      },
      {
        qs: " What causes shigellosis?        ",
        ans: "Shigella bacteria are usually found in the stool (feces, or poop) of people who are infected. The bacteria are spread when someone comes into contact with the stool of an infected person or comes into contact with an item that’s been contaminated with the stool or the bacteria.\n People get shigellosis by eating food or drinking water that has been contaminated, or through sexual contact with an infected person. Many different foods can be contaminated, but Shigella is found typically in uncooked vegetables or shellfish.        ",
      },
     
  
        {
          qs: " What are the symptoms of Shigella infection?          ",
          ans: "Common signs and symptoms of shigellosis include: <br/> ● Diarrhea. <br/> ● Fever. <br/> ● Stomach Pains. <br/> ● Vomiting.          ",
        },
        

        {
          qs: " How is shigellosis diagnosed?          ",
          ans: " Your provider may diagnose you with Shigella infection on the basis of your symptoms. However, testing a stool sample for the presence of the bacteria will let you know for sure.          ",
        },
        {
          qs: " How is shigellosis treated?          ",
          ans: " Contact your healthcare provider if you or one of your family members has bloody or prolonged diarrhea (diarrhea lasting more than 3 days) or severe stomach cramping or tenderness, especially if you also have a fever or feel very sick. Tell your healthcare provider if you have other medical conditions or a weakened immune system—for example, because of an HIV infection or chemotherapy treatment. If you have a weakened immune system, you may be more likely to become severely ill.   ",
        },
        {
          qs: "  Shigellosis Prevention          ",
          ans: " <br/> ● Wash your hands with soap and water thoroughly and often, especially before and after eating, after using the bathroom and changing diapers, before preparing food, and after coming into contact with an infected person. <br/> ● Throw away soiled diapers in a lined garbage can with a lid. <br/> ● Wait for a week after your partner has recovered from diarrhea before engaging in sexual activities. <br/> ● Follow safe food and water instructions when traveling in other countries.          ",
        },
        
       
        
        
    ],
    
},
  ];
//   const learnMoreHandler = name=>{
//     // props.state(name);
//     {props.onClick};
//   }
  
  return (
    
    <div className="py-20 px-[10%] font-montserrat">
    
      {/* <h1 className="text-5xl font-medium text-center text-brown tracking-wide mb-12 underline">
        Conditions
      </h1> */}
         <Helmet> 
          <title> Kaumudi Somnay MD</title>
          <meta name="description" content=" Dr. Kaumudi Somnay Deal With following following"/>
          <link rel="canonical" href="/Conditions" />
        </Helmet>

      <div className="grid lg:grid-cols-2 2xl:grid-cols-3 ">
        {procedures.map((item) => (
          <div className="mr-7 my-12 max-w-[36rem]">
            <img className="" src={item.image} alt={item.name} />
            <h1 className="text-4xl font-montserrat font-medium text-brown tracking-wide mt-8">
              {item.name.split("<br/>").join("\n")}
            </h1>
            <hr className="w-24 h-0.5 mr-auto my-4 bg-brown border-0 rounded md:my-10 "></hr>
            <p className="text-gry font-medium">{item.description}</p>
            <div className=""></div>
            <button
                onClick={()=>{
                    props.onClick();
                    props.state(item);
                }}
              className="my-12 bg-transparent hover:bg-brown text-brown hover:text-white py-2 px-5 border-2 border-brown hover:border-transparent tracking-widest"
            >
              LEARN MORE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Conditions;
