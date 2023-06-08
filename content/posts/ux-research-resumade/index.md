---
title: UX Research - Resumade
description: A case study to understand pain points in tailoring resumes when applying for multiple jobs
date: 2023-05-03
draft: false
slug: /blog/ux-research-resumade
tags:
  - Design
  - Research
---

# Why job applications are a nightmare

## A case study to understand pain points in tailoring resumes when applying for multiple jobs

![Cover image — UX Research: Why job applications are a nightmare written in a box designed like an app window.](https://miro.medium.com/v2/resize:fit:1400/1*5CQ3WlNlsA-RIKAYXUSA-A.png)

Imagine you’re a university student on the hunt for the perfect graduate job. You spend countless hours scouring job listings, crafting cover letters, and perfecting your resume. You have the skills and experience to excel in these roles, but the challenge lies in showcasing those attributes to potential employers.

You start tailoring your resume to match each job description, carefully selecting the most relevant experiences and skills to highlight. But soon you realize that this is an incredibly time-consuming and tedious process.

And it’s not just you — [54% of applicants do not tailor their resumes](https://zety.com/blog/hr-statistics#resume-statistics). This means more than half of job seekers are missing out on opportunities to stand out from the competition and catch the attention of potential employers.

> 54% of job seekers do not tailor their resume and are missing out on opportunities to stand out from the competition.

But what if there was a better way? What if you could streamline the resume-tailoring process and ensure that you’re always presenting the best version of yourself to potential employers? That’s exactly what we set out to do with our project as a team of UX designers — improve the resume-tailoring process and help job seekers like you land their dream roles.

Before we dive into the design process, we wanted to understand peoples’ actual pain points when it comes to applying for multiple jobs. In this article, I’ll share our user research process and how we used these insights to guide our design decisions for the perfect job application companion.

# User Study

To get a better understanding of our target user’s needs, we used two research techniques: contextual inquiry and online surveys.

## **Contextual Inquiry**

> The core premise of contextual inquiry is very simple: go where the customer works, observe the customer as he or she works, and talk to the customer about the work. - [Contextual Design, Beyer and Holtzblatt](https://courses.cs.washington.edu/courses/cse440/16sp/readings/ContextualInquiry-BeyerHoltzblatt1997.pdf)

![5 interviewees for contextual inquiries are listed along with their current position and the roles they are looking for. Most are currently studying and looking for internships or are fresh grads looking for junior roles.](https://miro.medium.com/v2/resize:fit:1400/0*Xu0rLl4QC1NRMVxU.png)

Our interviewees (pseudonyms used for anonymity)

We conducted [contextual inquiries](https://medium.com/design-bootcamp/contextual-inquiries-for-the-soul-e39bdb134737) with 5 participants who were actively looking for jobs in different fields. We conducted the interviews such that the interviewee was in their ‘natural habitat’, which was their desk with their computer so that they had _context_ when answering our questions. This allowed us to get a firsthand look at how people apply for jobs, what challenges they face, and what goals they have.

> Contextual inquiries allowed us to get a firsthand look at how people apply for jobs, what challenges they face, and what goals they have.

We asked the interviewees to walk us through how they prepare their resumes for a particular job application, and we recorded their actions and comments. By doing this, we were following the [**Master-Apprentice model**](https://medium.com/sven-laqua/contextual-interviewing-using-the-master-apprentice-model-a5dd05a0fcfb), where we played the role of the ‘apprentice’ so that the interviewee/user naturally becomes the ‘master’ and teaches their ‘art’ of tailoring resumes to the apprentice. This technique allowed us to observe the user’s actions and frustrations during the process, and understand their pain points to ask meaningful follow-up questions. We also encouraged them to think aloud to better understand their thought process.

## **Online Survey**

To complement our qualitative data with some quantitative metrics, we conducted an [online survey](https://forms.gle/XYKCA6dtBDUuXbKz7) with 28+ respondents. We asked them what they like and dislike about the current software they use during job applications and had some questions that can be rated using the _Likert scale._ The [Likert scale](https://www.surveymonkey.com/mp/likert-scale/) helps us to get rid of the binary Yes/No questions and uses a rating scale that allows the respondent to give more nuanced feedback about how they feel.

![Question: How likely are you to use a resume generated by a computer? Options: 1 — Extremely unlikely, 2 — Unlikely, 3 — Neutral, 4 — Likely, 5 — Extremely Likely](https://miro.medium.com/v2/resize:fit:1400/1*h46wwV_bi-J14yxD2SvH0A.png)

A question asked using the Likert scale

This helped us gather important insights to solve real user problems with our product’s design.

# User Data Analysis

## Affinity Diagram

After we gathered sufficient data from the contextual interviews, we shared our findings with each other and grouped the notes based on their content to identify common themes and patterns. This helped us create an [affinity diagram](https://blogs.ubc.ca/cpsc544/files/2018/09/3-s2.0-B9780128008942000065-main.pdf) that organized the large number of notes we got from the interviews into their natural relationships.

![Rough affinity diagram with about 200 notes. Similar notes are grouped together and labelled with headings.](https://miro.medium.com/v2/resize:fit:1400/1*k1n2w1vsuHsYQZCs4L0hTA.png)

Initial Affinity Diagram

Then we added hierarchy to our affinity diagrams by using boxes and labels. Similar sticky notes were put together with a low-level blue label. Related blue labels were grouped together under pink labels. And a bunch of pink labels came under the highest-level green label which stands for a broad theme like “Tailoring resumes”.

![Pink heading: I need to analyze the job description before tailoring. Blue heading 1: Going through JD is important. 6 notes under this. Blue heading 2: I find JD analysis to be time-consuming. 4 notes under this.](https://miro.medium.com/v2/resize:fit:1400/1*7wBvK3FTtEtYimgUXhOGkg.png)

Snippet from our final affinity diagram

Ultimately, [affinity diagrams](https://bootcamp.uxdesign.cc/the-power-of-affinity-diagrams-c49524cddde2) were essential in helping us identify common issues, needs, and work patterns. It made our data more organized and it was easier for us to find trends and prioritize during our ideation process.

> Affinity diagrams were essential in helping us identify common issues, needs, and work patterns. It made our data more organized and it was easier for us to find trends and prioritize during our ideation process.

## Design Models

To help us empathize with the users and understand their goals and challenges, we created two types of design models: sequence and cultural models.

The **sequence model** helped us to map out the user’s steps or actions, the motivations behind them, and any breakdowns they encountered along the way.

![An example of a sequence work model showing intentions, actions and breakdowns.](https://miro.medium.com/v2/resize:fit:1400/1*glkmQV-aQxZgdDuFxQtKRw.png)

Sequence Model for Applying for Internships

The **cultural model** helped us to understand the user’s beliefs, values, assumptions, and expectations that influenced their behavior and decisions.

![A cultural model example. Show relations between job applicant, online resume building services, competitors and recruiters.](https://miro.medium.com/v2/resize:fit:1400/1*-VK1J7VsNSDWfG-KOH6ZaQ.png)

Cultural Model for Applying for Internships

# Our Findings

Our user data analysis revealed several pain points experienced by job applicants when it came to the application process.

## Insights from the Affinity Diagram

1.  **People lost track of their job applications**

    Many interviewees applied for a large number of jobs and found it difficult to keep track of the changing statuses of the various applications and found the file organization cumbersome as well.

2.  **Resume tailoring was too much work**

    Job applicants felt that resume-tailoring was too time-consuming to manually include their relevant skills, experiences, projects, courses, etc. for every application.

3.  **Job descriptions are too wordy**

    Applicants needed to know the requirements and qualifications before making the decision to apply. However, wordy job descriptions meant analyzing the job description was the biggest time sink for them.

4.  **People wanted actionable advice to improve their resume**

    Current software only gave interviewees a numerical score for their resume but no real actionable tips. Users wanted suggestions and possibly automated tailoring for their resumes.

5.  **People wanted a one-stop resume platform**

    Users wanted bullet point suggestions and action word alternatives to quickly tailor their resumes without having to search online or on LinkedIn. They wanted to avoid switching between apps.

6.  **Good features were behind a paywall**

    Many interviewees were frustrated by the fact that good resume software required a subscription or payment to simply download the resume they spent a lot of time creating.

## Findings from the Survey

![What software do you use to track your job applications? 28 responses. 57.1% use Word, 21.4% use online software.](https://miro.medium.com/v2/resize:fit:1400/1*9t_iXfyBi0iuDVwMdP1AWA.png)

1.  **Software used for editing resumes**

    Most respondents used MS Word for editing their resumes. People liked Word for its customizability but were annoyed by how easily the formatting can get distorted. They also wished Word had more resume-specific features. People using online software were discouraged by the limited number of free-to-use features.

2.  **Software used for application tracking**

    For tracking, many used Spreadsheet software. Some were frustrated that the spreadsheet fields have to be manually filled in every time and sometimes they tend to forget to track their status after an application.

3.  **How many applicants tailor resumes**

    We found that 50~% of users tailor their resumes, while 30~% do it only for a handful of positions. However, the time they spend tailoring is highly variable, with the median being 30 mins — 1 hour.

4.  **What people think about sharing resumes**

    We were surprised to find that many users were willing to share their resumes online anonymously for feedback. They wanted to get honest opinions and suggestions from those more experienced in their field.

5.  **Opinions on AI-generated resumes**

    Most people were indifferent about using an AI-generated resume, which may be due to previous poor experiences with online resume tools. They were not sure if the AI would understand their skills and achievements well.

6.  **Importance of ATS-friendliness**

    Most people did not pay attention to making sure their resume is ATS-friendly. In fact, many people were unaware of the term.

# Lessons learned

Our research showed us the importance of conducting user research to understand the pain points of the target audience before designing any product. While we initially focused on resume-tailoring only, the research helped us understand what are the other challenges and needs that people have when applying for jobs. We learned that it’s essential to observe people’s actions and frustrations while performing a specific task and ask follow-up questions to gain deeper insights about how they feel rather than asking leading questions. Combining qualitative and quantitative data provided a more comprehensive understanding of the user’s needs, wants, and expectations.

# What’s next?

We’ve learned a lot from our user research about the challenges and needs of job applicants when it comes to resume tailoring. We’ve discovered that people want a simple and fast way to customize their resumes for each job description, without having to juggle multiple tools or waste time on formatting and proofreading. They also want a convenient way to keep track of their job applications and their progress.

> Our findings showed that job applicants needed a tool that could help them analyse job descriptions, automatically tailor their resume to it and keep track of their job applications.

Based on these insights, we’re designing an app that will streamline resume-tailoring and help job applicants land their dream jobs. Our user research process has shown us the importance of understanding the target audience’s pain points before designing any product, a valuable lesson for all beginner UX researchers.
