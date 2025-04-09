import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Card } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export default function PsychologyTerms() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      <header className="bg-slate-900 text-white py-6 px-4 md:px-6 lg:px-8 shadow-md">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-2xl md:text-3xl font-bold">AP Psychology Terms 2025</h1>
          <p className="text-slate-300 mt-2">Your comprehensive guide to mastering psychology concepts</p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8">
        <Tabs defaultValue="home" className="w-full">
          <div className="sticky top-0 z-10 bg-slate-50 pt-2 pb-4 border-b border-slate-200">
            <ScrollArea className="max-w-full pb-2">
              <TabsList className="h-10 w-max px-1">
                <TabsTrigger value="home">Home</TabsTrigger>
                <TabsTrigger value="unit1">Unit 1</TabsTrigger>
                <TabsTrigger value="unit2">Unit 2</TabsTrigger>
                <TabsTrigger value="unit3">Unit 3</TabsTrigger>
                <TabsTrigger value="unit4">Unit 4</TabsTrigger>
                <TabsTrigger value="unit5">Unit 5</TabsTrigger>
                <TabsTrigger value="unit6">Unit 6</TabsTrigger>
                <TabsTrigger value="unit7">Unit 7</TabsTrigger>
                <TabsTrigger value="unit8">Unit 8</TabsTrigger>
                <TabsTrigger value="unit9">Unit 9</TabsTrigger>
              </TabsList>
            </ScrollArea>
          </div>

          <TabsContent value="home" className="mt-6">
            <HomeContent />
          </TabsContent>

          <TabsContent value="unit1" className="mt-6">
            <UnitContent
              title="Unit 1: Scientific Foundations of Psychology"
              description="This unit introduces psychology as a scientific discipline. It covers the historical development of psychology, major theoretical approaches, the different domains of psychology, and the research methods, statistical analyses, and ethical considerations used by psychologists."
              topics={unit1Topics} // Updated data is passed here
            />
          </TabsContent>

          <TabsContent value="unit2" className="mt-6">
            <UnitContent
              title="Unit 2: Biological Bases of Behavior"
              description="This unit explores the biological underpinnings of behavior and mental processes, including the structure and function of the nervous system (neurons, neurotransmitters, brain regions), the endocrine system (hormones), genetics, and evolutionary psychology's perspective on behavior."
              topics={unit2Topics}
            />
          </TabsContent>

          <TabsContent value="unit3" className="mt-6">
            <UnitContent
              title="Unit 3: Sensation and Perception"
              description="This unit covers how we receive information from the world through our senses (sensation) and how our brain organizes and interprets that information to create meaning (perception). It explores the principles underlying vision, hearing, touch, taste, smell, body position (kinesthesia), and balance (vestibular sense), as well as fundamental perceptual concepts."
              topics={unit3Topics}
            />
          </TabsContent>

          <TabsContent value="unit4" className="mt-6">
            <UnitContent
              title="Unit 4: Learning"
              description="This unit explores the process of learning, defined as a relatively permanent change in behavior or knowledge due to experience. It covers the principles of classical conditioning, operant conditioning, and observational learning, as well as cognitive and biological factors that influence learning."
              topics={unit4Topics}
            />
          </TabsContent>

          <TabsContent value="unit5" className="mt-6">
            <UnitContent
              title="Unit 5: Cognitive Psychology"
              description="This unit explores higher-level mental processes, including memory (encoding, storage, retrieval), forgetting, thinking, problem-solving, decision-making, judgment, language development, and intelligence."
              topics={unit5Topics}
            />
          </TabsContent>

          <TabsContent value="unit6" className="mt-6">
            <UnitContent
              title="Unit 6: Developmental Psychology"
              description="This unit examines physical, cognitive, and social development across the human lifespan, from conception through infancy, childhood, adolescence, and adulthood to death. It covers major theories and stages of development."
              topics={unit6Topics}
            />
          </TabsContent>

          <TabsContent value="unit7" className="mt-6">
            <UnitContent
              title="Unit 7: Motivation, Emotion, and Personality"
              description="This unit explores the forces that energize and direct behavior (motivation), the complex experience of feelings (emotion), the impact of stress, and the study of individual differences in characteristic patterns of thinking, feeling, and acting (personality)."
              topics={unit7Topics}
            />
          </TabsContent>

          <TabsContent value="unit8" className="mt-6">
            <UnitContent
              title="Unit 8: Clinical Psychology"
              description="This unit examines psychological disorders, including their definition, classification (using the DSM), explanations (from different perspectives), and various approaches to treatment (psychotherapy and biomedical therapy)."
              topics={unit8Topics}
            />
          </TabsContent>

          <TabsContent value="unit9" className="mt-6">
            <UnitContent
              title="Unit 9: Social Psychology"
              description="This unit explores how individuals think about, influence, and relate to one another. It covers topics like social thinking (attributions, attitudes), social influence (conformity, obedience, group behavior), prejudice, aggression, attraction, altruism, and conflict resolution."
              topics={unit9Topics}
            />
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-slate-900 text-slate-300 py-6 px-4 text-center text-sm">
        <div className="max-w-7xl mx-auto">
          <p>AP Psychology Terms Guide 2025 - Study Smart!</p>
          <p className="mt-2 text-slate-400">
            Created to help you master psychology concepts and succeed on your AP exam
          </p>
        </div>
      </footer>
    </div>
  )
}

function HomeContent() {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">AP Psychology Critical Terms 2025</h2>
        <p className="text-xl text-slate-600">Your Definitive Guide</p>
      </div>

      <Card className="p-6 bg-white shadow-md hover:shadow-lg transition-shadow">
        <h3 className="text-xl font-semibold text-slate-800 mb-3">Welcome!</h3>
        <p className="text-slate-600 mb-4">
          This site is your essential resource for mastering the critical terminology for the 2025 AP Psychology exam.
          Understanding the vocabulary is fundamental for success on both the multiple-choice questions (MCQs) and the
          free-response questions (FRQs).
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Our Approach:</h3>
        <p className="text-slate-600 mb-4">
          We've meticulously organized <em>all</em> key terms according to the{" "}
          <strong>official College Board AP Psychology Course and Exam Description (CED)</strong> units for the 2025
          exam cycle. Each term is defined clearly, provided with a practical example, and its significance explained
          within the context of the course.
        </p>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">How to Use This Site:</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            Navigate using the <strong>Unit Tabs</strong> above.
          </li>
          <li>Each Unit Tab contains terms grouped by the official CED topics.</li>
          <li>Use your browser's "Find" function (Ctrl+F or Cmd+F) to search for specific terms within this page.</li>
        </ul>

        <h3 className="text-xl font-semibold text-slate-800 mb-3 mt-6">Why Vocabulary Matters:</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-600">
          <li>
            <strong>MCQs:</strong> Directly test definitions and application of terms.
          </li>
          <li>
            <strong>FRQs:</strong> Require precise use, definition, and application of terms for scoring points.
          </li>
        </ul>

        <p className="text-slate-500 italic mt-8">
          <strong>Disclaimer:</strong> This content is based on typical AP Psychology CED frameworks leading up to the
          2025 exam. The official 2025 CED may contain updates. Always consult official College Board materials as your
          primary source.
        </p>
      </Card>
    </div>
  )
}

function UnitContent({ title, description, topics }) {
  return (
    <div className="space-y-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">{title}</h2>
        <p className="text-slate-600">{description}</p>
      </div>

      <div className="space-y-12">
        {topics.map((topic, index) => (
          <div key={index} className="space-y-6">
            <h3 className="text-2xl font-semibold text-slate-800 pb-2 border-b border-slate-200">{topic.title}</h3>

            <div className="grid gap-6">
              {topic.terms.map((term, termIndex) => (
                <TermCard key={termIndex} term={term} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TermCard({ term }) {
  return (
    <Card className="overflow-hidden bg-white hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-start">
          <div className="bg-slate-100 rounded-full p-1.5 mr-4 mt-1">
            <ChevronRight className="h-4 w-4 text-slate-600" />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-slate-800 mb-2">{term.name}</h4>

            {term.definition && (
              <div className="mb-3">
                <p className="text-sm font-medium text-slate-500 mb-1">Definition:</p>
                <p className="text-slate-700">{term.definition}</p>
              </div>
            )}

            {term.example && (
              <div className="mb-3">
                <p className="text-sm font-medium text-slate-500 mb-1">Example:</p>
                <p className="text-slate-700">{term.example}</p>
              </div>
            )}

            {term.significance && (
              <div className="mb-1">
                <p className="text-sm font-medium text-slate-500 mb-1">Significance:</p>
                <p className="text-slate-700">{term.significance}</p>
              </div>
            )}

            {term.subtypes && term.subtypes.length > 0 && (
              <div className="mt-4 pl-4 border-l-2 border-slate-200 space-y-4">
                {term.subtypes.map((subtype, subtypeIndex) => (
                  <div key={subtypeIndex}>
                    <h5 className="text-md font-medium text-slate-700 mb-2">{subtype.name}</h5>
                    {subtype.definition && <p className="text-slate-600 text-sm">{subtype.definition}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Card>
  )
}

// Data structure for Unit 1 (Updated with provided terms)
const unit1Topics = [
  {
    title: "Topic 1.1: Introducing Psychology",
    terms: [
      {
        name: "Psychology",
        definition: "The scientific study of behavior and mental processes.",
        example: "A researcher studying how caffeine affects reaction time is doing psychology.",
        significance: "Defines the entire field and its scope (observable actions and internal experiences).",
      },
      {
        name: "Empiricism",
        definition:
          "The view that knowledge originates in experience and that science should, therefore, rely on observation and experimentation.",
        example:
          'Aristotle believed knowledge comes from sensory experiences; John Locke argued the mind is a "blank slate" (tabula rasa).',
        significance: "Forms the basis of the scientific approach in psychology – knowledge must be based on evidence.",
      },
      {
        name: "Structuralism",
        definition:
          "Early school of thought promoted by Wundt and Titchener; used introspection to reveal the structure of the human mind.",
        example: "Asking someone to report their sensations, images, and feelings immediately after looking at a rose.",
        significance:
          "First major psychological school; highlighted the importance of studying conscious experience, though introspection proved unreliable. Key Figures: Wilhelm Wundt, Edward Titchener.",
      },
      {
        name: "Functionalism",
        definition:
          "Early school of thought promoted by James and influenced by Darwin; explored how mental and behavioral processes function—how they enable the organism to adapt, survive, and flourish.",
        example: "Studying how smelling food helps trigger digestion and prepares the body to eat.",
        significance: "Shifted focus from structure to purpose/function of the mind; influenced later fields like evolutionary psychology. Key Figure: William James.",
      },
      {
        name: "Behaviorism",
        definition: "The view that psychology (1) should be an objective science that (2) studies behavior without reference to mental processes. Most research psychologists today agree with (1) but not (2).",
        example: "Observing how often a rat presses a lever to receive food, without speculating about the rat's \"hunger\" feelings.",
        significance: "Dominated psychology for decades; emphasized objective measurement and learning through conditioning. Key Figures: John B. Watson, B.F. Skinner.",
      },
      {
        name: "Psychoanalytic/Psychodynamic Approach",
        definition: "Perspective originating with Freud that emphasizes the role of unconscious conflicts, early childhood experiences, and repressed drives in shaping personality and behavior.",
        example: "Analyzing a patient's dreams to uncover hidden desires or unresolved childhood issues.",
        significance: "Hugely influential, though controversial; highlighted the importance of the unconscious mind and early life. Key Figure: Sigmund Freud.",
      },
      {
        name: "Humanistic Psychology",
        definition: "Historically significant perspective that emphasized human growth potential, free will, and self-actualization.",
        example: "A therapist focusing on a client's inherent goodness and potential to achieve personal fulfillment.",
        significance: "Rebelled against behaviorism and psychoanalysis; focused on positive aspects of human experience. Key Figures: Carl Rogers, Abraham Maslow.",
      },
      {
        name: "Cognitive Psychology",
        definition: "The scientific study of mental processes, including perception, thought, memory, reasoning, problem-solving, language, and intelligence.",
        example: "Researching how people form mental maps of their environment or how memory biases influence decision-making.",
        significance: "Brought the \"mind\" back into psychology; studies how we process information.",
      },
      {
        name: "Evolutionary Psychology",
        definition: "The study of the evolution of behavior and the mind, using principles of natural selection.",
        example: "Explaining the common fear of snakes and spiders as an adaptive trait that helped ancestors survive.",
        significance: "Applies evolutionary principles to understand universal human tendencies.",
      },
      {
        name: "Biological Psychology (Neuroscience)",
        definition: "The scientific study of the links between biological (genetic, neural, hormonal) and psychological processes.",
        example: "Investigating how specific brain structures are involved in memory formation or how neurotransmitters affect mood.",
        significance: "Connects behavior and mental processes to underlying physiology.",
      },
      {
        name: "Sociocultural Psychology",
        definition: "The study of how situations and cultures affect our behavior and thinking.",
        example: "Comparing how children are raised in individualistic cultures (like the US) versus collectivist cultures (like Japan).",
        significance: "Highlights the powerful influence of social context and cultural norms.",
      },
      {
        name: "Biopsychosocial Approach",
        definition: "An integrated approach that incorporates biological, psychological, and social-cultural levels of analysis to understand behavior and mental processes.",
        example: "Understanding depression by considering genetic predispositions (biological), negative thought patterns (psychological), and stressful life events or lack of social support (social-cultural).",
        significance: "Provides a comprehensive framework for understanding complex psychological phenomena.",
      },
      {
        name: "Basic Research",
        definition: "Pure science that aims to increase the scientific knowledge base.",
        example: "Studying the properties of different types of memory.",
        significance: "Builds foundational understanding, which applied research can later use.",
      },
      {
        name: "Applied Research",
        definition: "Scientific study that aims to solve practical problems.",
        example: "Designing a more effective way to teach reading based on cognitive principles.",
        significance: "Uses psychological knowledge to address real-world issues.",
      },
      {
        name: "Counseling Psychology",
        definition: "A branch of psychology that assists people with problems in living (often related to school, work, or marriage) and in achieving greater well-being.",
        example: "Helping a college student cope with stress and academic challenges.",
        significance: "Focuses on helping people navigate everyday life challenges.",
      },
      {
        name: "Clinical Psychology",
        definition: "A branch of psychology that studies, assesses, and treats people with psychological disorders.",
        example: "Diagnosing and treating a person with major depressive disorder using therapy and coordinating with medical professionals.",
        significance: "Focuses on mental health disorders.",
      },
      {
        name: "Psychiatry",
        definition: "A branch of medicine dealing with psychological disorders; practiced by physicians who sometimes provide medical (e.g., drug) treatments as well as psychological therapy.",
        example: "A psychiatrist prescribing antidepressant medication to a patient.",
        significance: "Differs from psychology in that psychiatrists are medical doctors (MDs) who can prescribe medication.",
      },
      {
        name: "Positive Psychology",
        definition: "The scientific study of human flourishing, with the goals of discovering and promoting strengths and virtues that help individuals and communities to thrive.",
        example: "Researching factors that contribute to happiness, resilience, and a meaningful life.",
        significance: "Focuses on well-being and optimal human functioning. Key Figure: Martin Seligman.",
      },
      {
        name: "Community Psychology",
        definition: "A branch of psychology that studies how people interact with their social environments and how social institutions affect individuals and groups.",
        example: "Working to create after-school programs in a low-income neighborhood to prevent delinquency.",
        significance: "Focuses on prevention and promoting mental health at the community level.",
      },
    ],
  },
  {
    title: "Topic 1.2: Research Methods in Psychology",
    terms: [
      {
        name: "Hindsight Bias",
        definition:
          'The tendency to believe, after learning an outcome, that one would have foreseen it. (Also known as the "I-knew-it-all-along phenomenon.")',
        example:
          'After your favorite team wins a game, saying "I knew they were going to win!" even though the outcome was uncertain beforehand.',
        significance: "Shows why psychological science, relying on prediction and testing, is superior to intuition.",
      },
      {
        name: "Overconfidence",
        definition: "The tendency to be more confident than correct—to overestimate the accuracy of our beliefs and judgments.",
        example: "A student being certain they aced a test and then being surprised by a lower grade.",
        significance: "Highlights the need for empirical testing rather than relying solely on confidence.",
      },
      {
        name: "Perceiving Order in Random Events",
        definition: "The tendency to find patterns or streaks in random sequences.",
        example: "Believing a coin is \"due\" for heads after several tails, even though each flip is independent.",
        significance: "Demonstrates our natural inclination to make sense of the world, which can lead to erroneous conclusions without scientific rigor.",
      },
      {
        name: "Scientific Method",
        definition: "A self-correcting process for evaluating ideas with observation and analysis. Involves formulating theories, generating hypotheses, testing them, and analyzing results.",
        example: "Developing a theory about sleep and memory, hypothesizing that more sleep improves recall, testing groups with different sleep amounts, analyzing recall scores.",
        significance: "The foundation of psychological research, promoting objectivity and verifiable results.",
      },
      {
        name: "Theory",
        definition: "An explanation using an integrated set of principles that organizes observations and predicts behaviors or events.",
        example: "The theory of classical conditioning explains how organisms learn associations between stimuli.",
        significance: "Provides a framework for understanding phenomena and generating testable predictions.",
      },
      {
        name: "Hypothesis",
        definition: "A testable prediction, often implied by a theory.",
        example: "\"If students get more sleep the night before an exam, then their test scores will be higher.\"",
        significance: "Allows theories to be tested empirically. Must be falsifiable.",
      },
      {
        name: "Operational Definition",
        definition: "A carefully worded statement of the exact procedures (operations) used in a research study. Specifies how variables will be measured or manipulated.",
        example: "Defining \"intelligence\" in a study as \"the score obtained on the Wechsler Adult Intelligence Scale (WAIS).\" Defining \"happiness\" as \"the number of times a person smiles in an hour.\"",
        significance: "Crucial for clarity and replication. Allows other researchers to repeat the study exactly.",
      },
      {
        name: "Replication",
        definition: "Repeating the essence of a research study, usually with different participants in different situations, to see whether the basic finding extends to other participants and circumstances.",
        example: "Another lab conducting the sleep and memory study with a different group of students to see if they get similar results.",
        significance: "Confirms findings, increases confidence in conclusions, and ensures results are not due to chance or specific conditions.",
      },
    ],
  },
  {
    title: "Topic 1.3: The Experimental Method",
    terms: [
      {
        name: "Experiment",
        definition: "A research method in which an investigator manipulates one or more factors (independent variables) to observe the effect on some behavior or mental process (the dependent variable). By random assignment of participants, the experimenter aims to control other relevant factors.",
        example: "Giving one group a new memory drug (experimental group) and another group a placebo (control group), then comparing their memory test scores.",
        significance: "The *only* research method that can establish cause-and-effect relationships.",
      },
      {
        name: "Experimental Group",
        definition: "In an experiment, the group exposed to the treatment, that is, to one version of the independent variable.",
        example: "The group receiving the actual memory drug in the experiment described above.",
        significance: "Receives the manipulation being tested.",
      },
      {
        name: "Control Group",
        definition: "In an experiment, the group *not* exposed to the treatment; contrasts with the experimental group and serves as a comparison for evaluating the effect of the treatment.",
        example: "The group receiving the placebo (inactive pill) in the memory drug experiment.",
        significance: "Provides a baseline against which the effect of the independent variable can be measured.",
      },
      {
        name: "Random Assignment",
        definition: "Assigning participants to experimental and control groups by chance, thus minimizing preexisting differences between the different groups.",
        example: "Using a random number generator to assign participants to either the drug group or the placebo group.",
        significance: "Crucial for establishing causality; helps ensure that groups are equivalent at the start of the experiment, reducing the influence of confounding variables related to participant characteristics. *Different from random sampling.*",
      },
      {
        name: "Independent Variable (IV)",
        definition: "In an experiment, the factor that is manipulated; the variable whose effect is being studied.",
        example: "In the memory drug study, the IV is the type of pill (actual drug vs. placebo). In a study on studying methods, the IV might be the method used (e.g., rereading vs. practice testing).",
        significance: "The \"cause\" variable that researchers intentionally change.",
      },
      {
        name: "Dependent Variable (DV)",
        definition: "In an experiment, the outcome that is measured; the variable that may change when the independent variable is manipulated.",
        example: "In the memory drug study, the DV is the score on the memory test. In the studying methods study, the DV might be the score on a subsequent quiz.",
        significance: "The \"effect\" variable that researchers measure to see if the IV had an impact.",
      },
      {
        name: "Confounding Variable",
        definition: "A factor other than the factor being studied (independent variable) that might influence a study's results. Random assignment aims to control for these.",
        example: "If the experimental group in the memory study happened to consist of people who naturally have better memories than the control group, this pre-existing difference would be a confounding variable.",
        significance: "Can undermine the ability to draw cause-and-effect conclusions if not controlled.",
      },
      {
        name: "Placebo",
        definition: "An inert substance or condition that is given to the control group in an experiment instead of the actual treatment.",
        example: "A sugar pill given to the control group in a drug study.",
        significance: "Used to control for the placebo effect.",
      },
      {
        name: "Placebo Effect",
        definition: "Experimental results caused by expectations alone; any effect on behavior caused by the administration of an inert substance or condition, which the recipient assumes is an active agent.",
        example: "A person reporting pain relief after taking a sugar pill they believed was a painkiller.",
        significance: "Demonstrates the power of belief and expectation; must be controlled for in experiments (using a placebo group).",
      },
      {
        name: "Double-Blind Procedure",
        definition: "An experimental procedure in which both the research participants and the research staff are ignorant (blind) about whether the research participants have received the treatment or a placebo.",
        example: "Neither the patients nor the doctors administering the pills know who is getting the real drug and who is getting the placebo.",
        significance: "Controls for both participant expectations (placebo effect) and researcher expectations (experimenter bias). The gold standard for experimental control.",
      },
    ],
  },
  {
    title: "Topic 1.4: Selecting a Research Method",
    terms: [
      {
        name: "Case Study",
        definition: "A descriptive technique in which one individual or group is studied in depth in the hope of revealing universal principles.",
        example: "Freud's studies of his patients; Piaget's studies of children's thinking; studying a person with a rare brain injury like Phineas Gage.",
        significance: "Provides rich, detailed information; good for studying rare phenomena. Limitation: Findings may not be generalizable to others. Cannot show causation.",
      },
      {
        name: "Naturalistic Observation",
        definition: "A descriptive technique of observing and recording behavior in naturally occurring situations without trying to manipulate and control the situation.",
        example: "Jane Goodall observing chimpanzees in the wild; watching children play on a playground; observing shoppers in a mall.",
        significance: "Allows study of behavior in realistic settings. Limitation: Does not explain behavior (no cause-effect); observer presence might alter behavior (reactivity).",
      },
      {
        name: "Survey",
        definition: "A descriptive technique for obtaining the self-reported attitudes or behaviors of a particular group, usually by questioning a representative, random sample of the group.",
        example: "Asking students about their study habits via a questionnaire; political polling.",
        significance: "Can gather data from large numbers of people quickly and relatively cheaply. Limitations: Relies on self-report (potential for dishonesty or inaccuracy), wording effects can bias responses, sampling bias can limit generalizability. Cannot show causation.",
      },
      {
        name: "Wording Effects",
        definition: "The subtle changes in the order or phrasing of questions in a survey can affect how people respond.",
        example: "Asking \"Should smoking be forbidden?\" might get a different response than \"Should smoking be allowed?\".",
        significance: "A major challenge in survey design; requires careful question construction.",
      },
      {
        name: "Sampling Bias",
        definition: "A flawed sampling process that produces an unrepresentative sample.",
        example: "Surveying only students exiting the library about campus study habits (missing students who study elsewhere).",
        significance: "Prevents the results from being generalized accurately to the larger population.",
      },
      {
        name: "Population",
        definition: "All those in a group being studied, from which samples may be drawn.",
        example: "All high school students in the United States; all registered voters in a city.",
        significance: "The group the researcher wants to generalize their findings to.",
      },
      {
        name: "Random Sample",
        definition: "A sample that fairly represents a population because each member has an equal chance of inclusion.",
        example: "Using a random number generator to select 100 names from a list of all students at a university.",
        significance: "Best way to achieve a representative sample, allowing findings to be generalized to the population. *Different from random assignment.*",
      },
      {
        name: "Correlational Research",
        definition: "A measure of the extent to which two factors vary together, and thus of how well either factor predicts the other. Detects relationships between variables.",
        example: "Studying the relationship between hours of sleep and GPA.",
        significance: "Allows prediction. Limitation: Correlation does not prove causation!",
      },
      {
        name: "Correlation Coefficient (r)",
        definition: "A statistical index of the relationship between two things (from -1.00 to +1.00).",
        example: "A correlation of r = +0.8 between study time and grades indicates a strong positive relationship; r = -0.6 between TV watching and grades indicates a moderate negative relationship; r = 0 indicates no relationship.",
        significance: "Quantifies the strength and direction of a relationship. Closer to +/- 1.00 means stronger relationship.",
      },
      {
        name: "Positive Correlation",
        definition: "Two variables tend to increase or decrease together. (Coefficient > 0)",
        example: "Height and weight are positively correlated.",
        significance: "Indicates a direct relationship.", // Added significance for completeness
      },
      {
        name: "Negative Correlation",
        definition: "As one variable increases, the other tends to decrease. (Coefficient < 0)",
        example: "Number of absences and grades are often negatively correlated.",
        significance: "Indicates an inverse relationship.", // Added significance for completeness
      },
      {
        name: "Scatterplot",
        definition: "A graphed cluster of dots, each of which represents the values of two variables. The slope of the points suggests the direction of the relationship between the two variables. The amount of scatter suggests the strength of the correlation (little scatter indicates high correlation).",
        example: "Plotting each student's study hours (x-axis) against their GPA (y-axis).",
        significance: "Visual representation of correlational data.",
      },
      {
        name: "Illusory Correlation",
        definition: "Perceiving a relationship between variables (typically people, events, or behaviors) even when no such relationship exists.",
        example: "Believing that sugar makes children hyperactive, even though studies show no consistent link. Believing it always rains after you wash your car.",
        significance: "Highlights cognitive biases; we tend to notice and remember confirming instances more.",
      },
      {
        name: "Regression Toward the Mean",
        definition: "The tendency for extreme or unusual scores or events to fall back (regress) toward the average.",
        example: "A student who scores unusually high on one test is likely to score closer to their average on the next test. A sports team that has an amazing winning streak will likely perform closer to their average level eventually.",
        significance: "Can be mistaken for a real effect; explains why interventions after extreme events might seem effective even if they aren't.",
      },
      {
        name: "Longitudinal Study",
        definition: "Research in which the same people are restudied and retested over a long period.",
        example: "Following a group of children from age 5 to age 25 to study developmental changes.",
        significance: "Tracks changes over time within individuals. Limitations: Time-consuming, expensive, participant attrition (drop-out).",
      },
      {
        name: "Cross-Sectional Study",
        definition: "A study in which people of different ages are compared with one another at the same point in time.",
        example: "Comparing the memory abilities of 20-year-olds, 40-year-olds, and 60-year-olds in the same year.",
        significance: "Faster and cheaper than longitudinal studies. Limitation: Cannot track individual changes; cohort effects (differences between age groups due to their different life experiences, not just age) can be confounding.",
      },
    ],
  },
  {
    title: "Topic 1.5: Statistical Analysis in Psychology",
    terms: [
      {
        name: "Descriptive Statistics",
        definition: "Numerical data used to measure and describe characteristics of groups. Includes measures of central tendency and measures of variation.",
        example: "Calculating the average score (mean) for a class on a test; finding the range of scores.",
        significance: "Summarizes and organizes data meaningfully.",
      },
      {
        name: "Inferential Statistics",
        definition: "Numerical data that allow one to generalize—to infer from sample data the probability of something being true of a population.",
        example: "Determining if the difference in test scores between an experimental group and a control group is large enough to be attributed to the independent variable, rather than just chance variation.",
        significance: "Allows researchers to draw conclusions about their hypotheses and generalize findings beyond the sample studied.",
      },
      {
        name: "Frequency Distribution",
        definition: "An arrangement of data that indicates how often a particular score or observation occurs. Often presented in a table or graph.",
        example: "A table listing how many students received scores in the 90s, 80s, 70s, etc.",
        significance: "Provides a visual overview of how scores are spread out.",
      },
      {
        name: "Histogram",
        definition: "A bar graph depicting a frequency distribution. The height of the bars indicates the frequency of a group of scores.",
        example: "A bar graph showing the frequency distribution of test scores.",
        significance: "Visual tool for summarizing data distribution.",
      },
      {
        name: "Measures of Central Tendency",
        definition: "Statistics that represent the center or typical value of a dataset.", // Added definition for the category itself
        example: "Mean, Median, Mode are the three main measures.",
        significance: "Summarizes the typical score in a dataset.",
      },
      {
        name: "Mean",
        definition: "The arithmetic average of a distribution, obtained by adding the scores and then dividing by the number of scores.",
        example: "The mean of scores 2, 3, 7 is (2+3+7)/3 = 4.",
        significance: "Most common measure, but sensitive to extreme scores (outliers).",
      },
      {
        name: "Median",
        definition: "The middle score in a distribution; half the scores are above it and half are below it.",
        example: "The median of scores 2, 3, 7 is 3. The median of 2, 3, 7, 8 is (3+7)/2 = 5.",
        significance: "Less affected by outliers than the mean.",
      },
      {
        name: "Mode",
        definition: "The most frequently occurring score(s) in a distribution.",
        example: "The mode of scores 2, 3, 3, 7 is 3.",
        significance: "Useful for nominal data; can have multiple modes or no mode.",
      },
      {
        name: "Skewed Distribution",
        definition: "A representation of scores that lack symmetry around their average value. Caused by outliers.",
        example: "Income distribution is typically positively skewed (most people earn less, a few earn vastly more, pulling the mean higher than the median). Test scores can be negatively skewed if the test is too easy (most scores cluster at the high end, a few low scores pull the mean down).",
        significance: "The relationship between mean, median, and mode indicates skew. (In positive skew: Mean > Median > Mode. In negative skew: Mean < Median < Mode).",
      },
      {
        name: "Measures of Variation",
        definition: "Statistics that describe the amount of diversity or spread in a distribution.", // Added definition for the category itself
        example: "Range and Standard Deviation are key measures.",
        significance: "Indicates how spread out the scores are in a dataset.",
      },
      {
        name: "Range",
        definition: "The difference between the highest and lowest scores in a distribution.",
        example: "The range of scores 2, 3, 7 is 7 - 2 = 5.",
        significance: "Simple measure of spread, but highly affected by outliers.",
      },
      {
        name: "Standard Deviation (SD)",
        definition: "A computed measure of how much scores vary around the mean score. The square root of the variance.",
        example: "A class with scores tightly clustered around the mean has a small SD; a class with widely scattered scores has a large SD.",
        significance: "Most useful and common measure of variability; indicates the consistency or dispersion of scores.",
      },
      {
        name: "Variance",
        definition: "The average of the squared differences from the Mean. Standard Deviation is the square root of the variance.",
        example: "Calculated as part of finding the standard deviation.",
        significance: "Basis for SD; less intuitive to interpret directly than SD.",
      },
      {
        name: "Normal Curve (Normal Distribution / Bell Curve)",
        definition: "A symmetrical, bell-shaped curve that describes the distribution of many types of data; most scores fall near the mean (about 68% fall within one standard deviation of it, 95% within two standard deviations, and 99.7% within three standard deviations).",
        example: "IQ scores, height, and many psychological traits often approximate a normal distribution.",
        significance: "A fundamental concept in statistics; allows for standardized comparisons (e.g., percentile ranks).",
      },
      {
        name: "Statistical Significance (p-value)",
        definition: "A statistical statement of how likely it is that an obtained result occurred by chance. Results are typically deemed significant if the probability (p-value) of them occurring by chance is less than 5% (p < .05).",
        example: "If a study comparing two teaching methods finds a difference in test scores with p = .03, it means there's only a 3% chance the observed difference occurred randomly; researchers would likely conclude the difference is statistically significant.",
        significance: "Helps researchers decide whether to reject the null hypothesis (the assumption of no effect or no difference). *Important: Statistical significance does not necessarily mean practical importance or large effect size.*",
      },
    ],
  },
  {
    title: "Topic 1.6: Ethical Guidelines in Psychology",
    terms: [
      {
        name: "Ethics",
        definition: "Moral principles that govern a person's behavior or the conducting of an activity. In psychology, refers to the standards for proper and responsible conduct in research and clinical practice.",
        example: "Adhering to guidelines for informed consent and confidentiality.",
        significance: "Protects participants (human and animal) and ensures the integrity of the profession.",
      },
      {
        name: "Institutional Review Board (IRB)",
        definition: "An ethics committee in a research institution that screens research proposals and safeguards participants' well-being. Required for federally funded research.",
        example: "An IRB reviewing a researcher's plan for a study involving potentially stressful stimuli to ensure adequate safeguards are in place.",
        significance: "Provides institutional oversight of research ethics.",
      },
      {
        name: "Informed Consent",
        definition: "Giving potential participants enough information about a study (its purpose, procedures, risks, benefits) to enable them to choose whether they wish to participate. Consent must be voluntary.",
        example: "Before a study begins, participants read and sign a form outlining what the study involves, that they can withdraw at any time, and who to contact with questions.",
        significance: "Fundamental ethical principle respecting participant autonomy.",
      },
      {
        name: "Debriefing",
        definition: "The post-experimental explanation of a study, including its purpose and any deceptions, to its participants. Also involves addressing any distress caused.",
        example: "After a study involving a mild deception (e.g., about the purpose of a task), the researcher fully explains the true purpose and why deception was necessary.",
        significance: "Ensures participants leave the study understanding its nature and without lasting negative effects. Particularly important when deception is used.",
      },
      {
        name: "Confidentiality",
        definition: "Keeping information obtained from a participant private, unless the participant gives consent for it to be shared or unless law requires disclosure (e.g., threat of harm).",
        example: "Storing research data securely and reporting results only in aggregated form, without identifying individual participants.",
        significance: "Protects participant privacy and encourages honest participation.",
      },
      {
        name: "Protection from Harm",
        definition: "Ethical obligation to minimize physical and psychological risk to research participants. Risks should be outweighed by potential benefits.",
        example: "Designing a study on stress that uses only mild, temporary stressors and providing resources if participants become distressed.",
        significance: "Prioritizes participant welfare.",
      },
      {
        name: "Animal Research Ethics (APA Guidelines)",
        definition: "Ethical guidelines for the care and use of animals in research, emphasizing necessity, humane treatment, minimization of discomfort, and proper housing and care. Governed by institutional committees (IACUCs).",
        example: "Ensuring laboratory rats are housed appropriately, handled gently, and any necessary surgical procedures use anesthesia and minimize pain.",
        significance: "Addresses the ethical considerations specific to using non-human subjects in research that might not be possible or ethical with humans.",
      },
    ],
  },
]
const unit2Topics = [
  {
    title: "Topic 2.1: Interaction of Heredity and Environment",
    terms: [
      {
        name: "Behavior Genetics",
        definition: "The study of the relative power and limits of genetic and environmental influences on behavior.",
        example: "Twin studies comparing similarities between identical and fraternal twins to estimate the heritability of traits like intelligence or personality.",
        significance: "Investigates the interplay of nature (genes) and nurture (environment).",
      },
      {
        name: "Heredity",
        definition: "The genetic transfer of characteristics from parents to offspring.",
        example: "Inheriting eye color or a predisposition for a certain temperament.",
        significance: "The \"nature\" component of behavior genetics.",
      },
      {
        name: "Environment",
        definition: "Every nongenetic influence, from prenatal nutrition to the people and things around us.",
        example: "Family upbringing, cultural norms, peer influences, education, nutrition.",
        significance: "The \"nurture\" component of behavior genetics.",
      },
      {
        name: "Chromosomes",
        definition: "Threadlike structures made of DNA molecules that contain the genes. Humans have 23 pairs.",
        example: "The X and Y chromosomes determine biological sex.",
        significance: "Carriers of genetic information.",
      },
      {
        name: "DNA (Deoxyribonucleic Acid)",
        definition: "A complex molecule containing the genetic information that makes up the chromosomes.",
        example: "The specific sequence of base pairs in DNA forms the code for building proteins.",
        significance: "The molecule of heredity.",
      },
      {
        name: "Genes",
        definition: "The biochemical units of heredity that make up the chromosomes; segments of DNA capable of synthesizing proteins.",
        example: "A specific gene might influence the production of a neurotransmitter receptor.",
        significance: "Determine traits; can be active (expressed) or inactive.",
      },
      {
        name: "Genome",
        definition: "The complete instructions for making an organism, consisting of all the genetic material in that organism's chromosomes.",
        example: "The human genome project mapped the entire sequence of human DNA.",
        significance: "The blueprint for an organism.",
      },
      {
        name: "Identical (Monozygotic) Twins",
        definition: "Twins who develop from a single fertilized egg that splits in two, creating two genetically identical organisms.",
        example: "Studying identical twins raised apart helps separate genetic from environmental influences.",
        significance: "Crucial for behavior genetics research due to their shared DNA.",
      },
      {
        name: "Fraternal (Dizygotic) Twins",
        definition: "Twins who develop from separate fertilized eggs. They are genetically no closer than ordinary brothers and sisters, but they share a prenatal environment.",
        example: "Comparing trait similarity in identical vs. fraternal twins helps estimate heritability.",
        significance: "Provide a comparison group for identical twin studies.",
      },
      {
        name: "Heritability",
        definition: "The proportion of variation among individuals in a group that we can attribute to genes. Heritability may vary depending on the range of populations and environments studied. *It does NOT refer to the extent to which a trait is inherited by an individual.*",
        example: "If the heritability of intelligence is estimated at 50%, it means that 50% of the *observed variation in intelligence among people in a studied population* can be attributed to genetic differences within that group.",
        significance: "A key concept in behavior genetics; often misinterpreted. It's a population statistic, not an individual one.",
      },
      {
        name: "Interaction",
        definition: "The interplay that occurs when the effect of one factor (such as environment) depends on another factor (such as heredity).",
        example: "A person with a genetic predisposition for anxiety might only develop an anxiety disorder if they experience significant stress (environment).",
        significance: "Emphasizes that nature and nurture work together, not in isolation.",
      },
      {
        name: "Molecular Genetics",
        definition: "The subfield of biology that studies the molecular structure and function of genes.",
        example: "Research seeking to identify specific genes associated with disorders like schizophrenia or depression.",
        significance: "Aims to find genetic roots of behavior and traits.",
      },
      {
        name: "Epigenetics",
        definition: "The study of environmental influences on gene expression that occur without a DNA change. Environmental factors can \"switch\" genes on or off.",
        example: "Studies showing how maternal stress during pregnancy can affect gene expression in the offspring, potentially influencing later stress responses. Diet or toxins can also cause epigenetic changes.",
        significance: "Shows how environment can directly affect genetic activity, blurring the line between nature and nurture.",
      },
    ],
  },
  {
    title: "Topic 2.2: The Endocrine System",
    terms: [
      {
        name: "Endocrine System",
        definition: "The body's \"slow\" chemical communication system; a set of glands that secrete hormones into the bloodstream.",
        example: "The adrenal glands releasing epinephrine during stress.",
        significance: "Regulates growth, metabolism, mood, reproduction, stress response, etc., often interacting with the nervous system.",
      },
      {
        name: "Hormones",
        definition: "Chemical messengers that are manufactured by the endocrine glands, travel through the bloodstream, and affect other tissues (including the brain).",
        example: "Insulin, testosterone, estrogen, cortisol, adrenaline.",
        significance: "Influence interest in sex, food, aggression, growth, mood, etc. Slower but longer-lasting effects than neurotransmitters.",
      },
      {
        name: "Adrenal Glands",
        definition: "A pair of endocrine glands that sit just above the kidneys and secrete hormones (epinephrine and norepinephrine, also called adrenaline and noradrenaline) that help arouse the body in times of stress. Also release cortisol.",
        example: "Triggering the \"fight-or-flight\" response during an emergency.",
        significance: "Central to the body's stress response.",
      },
      {
        name: "Pituitary Gland",
        definition: "The endocrine system's most influential gland. Under the influence of the hypothalamus, the pituitary regulates growth and controls other endocrine glands. Often called the \"master gland.\"",
        example: "Releasing growth hormone; signaling the thyroid gland to release its hormones; signaling ovaries/testes to release sex hormones.",
        significance: "Links the nervous system (via hypothalamus) and the endocrine system.",
      },
      {
        name: "Hypothalamus",
        definition: "A neural structure lying below the thalamus; it directs several maintenance activities (eating, drinking, body temperature), helps govern the endocrine system via the pituitary gland, and is linked to emotion and reward.",
        example: "Monitoring blood chemistry and signaling the pituitary to release hormones accordingly.",
        significance: "Key regulator of basic drives and the endocrine system.",
      },
      {
        name: "Thyroid Gland",
        definition: "Endocrine gland located in the neck that produces hormones (like thyroxine) regulating metabolism, growth, and development.",
        example: "An overactive thyroid (hyperthyroidism) can cause restlessness and weight loss; an underactive thyroid (hypothyroidism) can cause fatigue and weight gain.",
        significance: "Crucial for energy metabolism.",
      },
      {
        name: "Parathyroids",
        definition: "Small glands located on the back of the thyroid gland that regulate calcium levels in the blood.",
        example: "Releasing parathyroid hormone to increase blood calcium.",
        significance: "Essential for nerve and muscle function.",
      },
      {
        name: "Pancreas",
        definition: "Gland located near the stomach that secretes insulin and glucagon, hormones that regulate the level of sugar (glucose) in the blood.",
        example: "Releasing insulin after a meal to help cells absorb glucose.",
        significance: "Vital for blood sugar control (related to diabetes).",
      },
      {
        name: "Testes",
        definition: "Male gonads; produce sperm and secrete male sex hormones (androgens, primarily testosterone).",
        example: "Testosterone influences development of male sex characteristics and sex drive.",
        significance: "Male reproductive and hormonal function.",
      },
      {
        name: "Ovaries",
        definition: "Female gonads; produce eggs (ova) and secrete female sex hormones (estrogens and progesterone).",
        example: "Estrogen influences development of female sex characteristics and regulation of the menstrual cycle.",
        significance: "Female reproductive and hormonal function.",
      },
    ],
  },
  {
    title: "Topic 2.3: Overview of the Nervous System and the Neuron",
    terms: [
       {
        name: "Nervous System",
        definition: "The body's speedy, electrochemical communication network, consisting of all the nerve cells of the peripheral and central nervous systems.",
        example: "Sensing touch, processing information, sending motor commands.",
        significance: "The primary system for communication and control in the body.",
      },
      {
        name: "Central Nervous System (CNS)",
        definition: "The brain and spinal cord.",
        example: "The brain processing visual information; the spinal cord relaying messages and controlling reflexes.",
        significance: "The body's decision maker; integrates information and coordinates activity.",
      },
      {
        name: "Peripheral Nervous System (PNS)",
        definition: "The sensory and motor neurons that connect the central nervous system (CNS) to the rest of the body.",
        example: "Nerves carrying sensory information from the skin to the spinal cord; nerves carrying commands from the brain to the muscles.",
        significance: "Gathers information and transmits CNS decisions to other body parts.",
      },
      {
        name: "Nerves",
        definition: "Bundled axons that form neural \"cables\" connecting the central nervous system with muscles, glands, and sense organs.",
        example: "The optic nerve carries information from the eye to the brain.",
        significance: "The communication lines of the PNS.",
      },
      {
        name: "Sensory (Afferent) Neurons",
        definition: "Neurons that carry incoming information from the sensory receptors (in skin, eyes, ears, etc.) to the brain and spinal cord (CNS).",
        example: "Neurons transmitting the feeling of touching a hot stove.",
        significance: "Bring information *in* from the environment/body. (Mnemonic: Afferent Arrives)",
      },
      {
        name: "Motor (Efferent) Neurons",
        definition: "Neurons that carry outgoing information from the brain and spinal cord (CNS) to the muscles and glands.",
        example: "Neurons causing your hand muscle to contract to pull away from the hot stove.",
        significance: "Send commands *out* to the body. (Mnemonic: Efferent Exits)",
      },
      {
        name: "Interneurons",
        definition: "Neurons within the brain and spinal cord (CNS) that communicate internally and intervene between the sensory inputs and motor outputs. Vast majority of neurons are interneurons.",
        example: "Processing the pain signal in the spinal cord and triggering the withdrawal reflex before the brain is fully aware.",
        significance: "Responsible for complex processing and reflexes within the CNS.",
      },
      {
        name: "Somatic Nervous System",
        definition: "The division of the peripheral nervous system that controls the body's skeletal muscles. (Also called the skeletal nervous system). Enables voluntary movement.",
        example: "Raising your hand, walking, typing.",
        significance: "Controls voluntary muscle actions.",
      },
      {
        name: "Autonomic Nervous System (ANS)",
        definition: "The part of the peripheral nervous system that controls the glands and the muscles of the internal organs (such as the heart). Its sympathetic division arouses; its parasympathetic division calms. Operates largely automatically.",
        example: "Regulating heartbeat, digestion, breathing, glandular activity.",
        significance: "Controls involuntary functions essential for life.",
      },
      {
        name: "Sympathetic Nervous System",
        definition: "The division of the autonomic nervous system that arouses the body, mobilizing its energy in stressful situations. \"Fight-or-flight.\"",
        example: "Accelerates heartbeat, raises blood pressure, slows digestion, raises blood sugar, cools with perspiration.",
        significance: "Prepares the body for action/stress.",
      },
      {
        name: "Parasympathetic Nervous System",
        definition: "The division of the autonomic nervous system that calms the body, conserving its energy. \"Rest-and-digest.\"",
        example: "Slows heartbeat, lowers blood pressure, stimulates digestion, contracts pupils.",
        significance: "Returns the body to a state of calm and conserves energy.",
      },
      {
        name: "Neuron",
        definition: "A nerve cell; the basic building block of the nervous system.",
        example: "Individual cells that transmit electrochemical signals.",
        significance: "Fundamental unit of neural communication.",
      },
      {
        name: "Cell Body (Soma)",
        definition: "The part of a neuron that contains the nucleus; the cell's life-support center.",
        example: "Integrates signals received by dendrites.",
        significance: "Maintains the health of the neuron.",
      },
      {
        name: "Dendrites",
        definition: "A neuron's bushy, branching extensions that receive messages and conduct impulses toward the cell body. (Listen)",
        example: "Receiving chemical signals from neighboring neurons.",
        significance: "Input fibers of the neuron.",
      },
      {
        name: "Axon",
        definition: "The neuron extension that passes messages through its branches to other neurons or to muscles or glands. (Speak)",
        example: "Transmitting an electrical impulse down its length.",
        significance: "Output fiber of the neuron; can be very long.",
      },
      {
        name: "Myelin Sheath",
        definition: "A fatty tissue layer segmentally encasing the axons of some neurons; enables vastly greater transmission speed as neural impulses hop from one node to the next. Produced by glial cells (Schwann cells in PNS, Oligodendrocytes in CNS).",
        example: "Myelinated axons in motor pathways allow for quick muscle responses. Deterioration leads to Multiple Sclerosis (MS).",
        significance: "Insulates axon and speeds up neural transmission.",
      },
      {
        name: "Glial Cells (Glia)",
        definition: "Cells in the nervous system that support, nourish, and protect neurons; they may also play a role in learning, thinking, and memory. Provide nutrients, insulate myelin, guide neural connections, mop up ions and neurotransmitters.",
        example: "Oligodendrocytes (CNS) and Schwann cells (PNS) form myelin. Astrocytes provide support and nutrients. Microglia clean up debris.",
        significance: "Essential partners to neurons; far more numerous than neurons.",
      },
      {
        name: "Action Potential",
        definition: "A neural impulse; a brief electrical charge that travels down an axon. Generated by the movement of positively charged ions (sodium and potassium) in and out of channels in the axon's membrane.",
        example: "The \"firing\" of a neuron.",
        significance: "The fundamental electrical signal for communication within a neuron.",
      },
      {
        name: "Ions",
        definition: "Electrically charged atoms. The exchange of ions across the neuron membrane is critical for the action potential.",
        example: "Sodium (Na+), Potassium (K+), Chloride (Cl-).",
        significance: "Their movement creates the electrical charge changes in a neuron.",
      },
      {
        name: "Resting Potential",
        definition: "The state of a neuron when it is not firing an action potential. The inside of the neuron is negatively charged relative to the outside (typically around -70mV). Maintained by the sodium-potassium pump.",
        example: "A neuron waiting for sufficient stimulation.",
        significance: "The polarized state that allows the neuron to fire when stimulated.",
      },
      {
        name: "Depolarization",
        definition: "The process during the action potential when sodium ions rush into the cell, causing the interior to become more positive relative to the outside.",
        example: "The rising phase of the action potential graph.",
        significance: "The key event that triggers the action potential propagation.",
      },
      {
        name: "Repolarization",
        definition: "The return of the cell to negative charge after depolarization, caused by potassium ions flowing out of the cell.",
        example: "The falling phase of the action potential graph.",
        significance: "Restores the neuron towards resting potential.",
      },
      {
        name: "Hyperpolarization",
        definition: "A brief period after repolarization when the neuron's charge becomes even more negative than the resting potential, making it less likely to fire again immediately (refractory period).",
        example: "The dip below resting potential on the action potential graph.",
        significance: "Contributes to the refractory period.",
      },
      {
        name: "Threshold",
        definition: "The level of stimulation required to trigger a neural impulse (action potential). Reached when excitatory signals minus inhibitory signals exceed a minimum intensity.",
        example: "If enough dendrites receive excitatory signals, the neuron reaches threshold (around -55mV) and fires.",
        significance: "The \"trigger point\" for an action potential.",
      },
      {
        name: "Refractory Period",
        definition: "A brief period after firing an action potential during which a neuron cannot fire another action potential (absolute refractory period) or requires stronger stimulation to fire (relative refractory period).",
        example: "Limits the maximum firing rate of a neuron.",
        significance: "Ensures action potential travels in one direction and limits firing frequency.",
      },
      {
        name: "All-or-None Response",
        definition: "A neuron's reaction of either firing (with a full-strength response) or not firing at all. The strength of the stimulus does *not* affect the action potential's intensity or speed (though a strong stimulus can cause more frequent firing).",
        example: "Like firing a gun – it either fires with full force or not at all; squeezing the trigger harder doesn't make the bullet go faster.",
        significance: "Neural signals are coded by frequency and pattern, not intensity of individual action potentials.",
      },
    ]
  },
  {
    title: "Topic 2.5: Influence of Drugs on Neurotransmission", // Assuming numbering gap is intentional as per user input
    terms: [
      {
        name: "Synapse (Synaptic Gap/Cleft)",
        definition: "The junction between the axon tip of the sending neuron and the dendrite or cell body of the receiving neuron. The tiny gap at this junction is called the synaptic gap or synaptic cleft.",
        example: "The space where neurotransmitters cross from one neuron to the next.",
        significance: "The site of chemical communication between neurons.",
      },
      {
        name: "Neurotransmitters",
        definition: "Chemical messengers that cross the synaptic gaps between neurons. When released by the sending neuron, neurotransmitters travel across the synapse and bind to receptor sites on the receiving neuron, thereby influencing whether that neuron will generate a neural impulse.",
        example: "Acetylcholine, Dopamine, Serotonin, Norepinephrine, GABA, Glutamate, Endorphins.",
        significance: "The chemical basis of neural communication. Different neurotransmitters have different functions.",
        // Subtypes listed below for organization, but presented as separate terms for display
      },
      {
        name: "Reuptake",
        definition: "A neurotransmitter's reabsorption by the sending neuron after it has transmitted its signal.",
        example: "Serotonin molecules being taken back up into the presynaptic terminal after binding to receptors.",
        significance: "Clears the synapse, recycling neurotransmitters and regulating signal duration. Many drugs (like SSRIs) work by blocking reuptake.",
      },
      {
        name: "Agonist",
        definition: "A molecule that increases a neurotransmitter's action. It may increase production or release, block reuptake, or bind to receptors and mimic the neurotransmitter's effects.",
        example: "Opiates (like morphine, heroin) are agonists for endorphins. Some antidepressant drugs are agonists for serotonin (by blocking reuptake).",
        significance: "Enhance neurotransmission; used therapeutically or are drugs of abuse.",
      },
      {
        name: "Antagonist",
        definition: "A molecule that inhibits or blocks a neurotransmitter's action. It may block production or release, or bind to receptors and block the neurotransmitter from binding.",
        example: "Curare poison blocks ACh receptors, causing paralysis. Naloxone (Narcan) blocks opioid receptors, reversing overdose. Some antipsychotic drugs block dopamine receptors.",
        significance: "Inhibit neurotransmission; used therapeutically (e.g., antipsychotics) or can be poisons.",
      },
      // Key Neurotransmitters (Listing them as individual terms for clarity)
      {
        name: "Acetylcholine (ACh)",
        definition: "Enables muscle action, learning, and memory.",
        example: "Malfunctions: With Alzheimer's disease, ACh-producing neurons deteriorate. Some poisons block ACh transmission (paralysis).",
        significance: "Crucial neurotransmitter for motor control and memory.",
      },
      {
        name: "Dopamine",
        definition: "Influences movement, learning, attention, emotion, and pleasure/reward.",
        example: "Malfunctions: Oversupply linked to schizophrenia. Undersupply linked to tremors and loss of motor control in Parkinson's disease. Key role in addiction.",
        significance: "Central to reward pathways, motor control, and various cognitive functions.",
      },
      {
        name: "Serotonin",
        definition: "Affects mood, hunger, sleep, and arousal.",
        example: "Malfunctions: Undersupply linked to depression. Some antidepressant drugs (SSRIs) raise serotonin levels by blocking reuptake.",
        significance: "Major regulator of mood, sleep, and appetite.",
      },
      {
        name: "Norepinephrine (Noradrenaline)",
        definition: "Helps control alertness and arousal (fight-or-flight). Also involved in mood.",
        example: "Malfunctions: Undersupply can depress mood.",
        significance: "Key neurotransmitter in the sympathetic nervous system stress response.",
      },
      {
        name: "GABA (gamma-aminobutyric acid)",
        definition: "A major inhibitory neurotransmitter. Calms nervous system activity.",
        example: "Malfunctions: Undersupply linked to seizures, tremors, and insomnia. Alcohol and anti-anxiety drugs (benzodiazepines like Valium, Xanax) often enhance GABA's effects.",
        significance: "Primary inhibitory neurotransmitter, reducing neuronal excitability.",
      },
      {
        name: "Glutamate",
        definition: "A major excitatory neurotransmitter; involved in memory and learning.",
        example: "Malfunctions: Oversupply can overstimulate the brain, producing migraines or seizures (which is why some people avoid MSG, monosodium glutamate, in food).",
        significance: "Primary excitatory neurotransmitter, essential for learning and memory (LTP).",
      },
      {
        name: "Endorphins",
        definition: "\"Morphine within\"—natural, opiate-like neurotransmitters linked to pain control and to pleasure.",
        example: "Released in response to pain or vigorous exercise (e.g., \"runner's high\").",
        significance: "Body's natural painkillers. Opiate drugs bind to endorphin receptors.",
      },
    ]
  },
  {
    title: "Topic 2.6: The Brain",
    terms: [
      {
        name: "Lesion",
        definition: "Tissue destruction. A brain lesion is a naturally or experimentally caused destruction of brain tissue.",
        example: "Studying the effects of accidental brain injuries (like Phineas Gage) or surgically removing/destroying specific brain areas in animals to study function.",
        significance: "Early method for studying brain function (correlating damaged area with lost function).",
      },
      {
        name: "Electroencephalogram (EEG)",
        definition: "An amplified recording of the waves of electrical activity sweeping across the brain's surface. These waves are measured by electrodes placed on the scalp.",
        example: "Used in sleep studies, diagnosing epilepsy, monitoring brain activity during tasks.",
        significance: "Measures overall brain electrical activity; good temporal resolution (when things happen), poor spatial resolution (where they happen). Non-invasive.",
      },
      {
        name: "CT (Computed Tomography) Scan (CAT Scan)",
        definition: "A series of X-ray photographs taken from different angles and combined by computer into a composite representation of a slice of the brain's structure.",
        example: "Used to detect brain damage, tumors, or bleeding.",
        significance: "Shows brain structure/anatomy. Does not show function.",
      },
      {
        name: "PET (Positron Emission Tomography) Scan",
        definition: "A visual display of brain activity that detects where a radioactive form of glucose goes while the brain performs a given task. Active neurons use more glucose.",
        example: "Showing which brain areas are active when a person reads aloud or listens to music.",
        significance: "Shows brain function/activity (metabolic activity). Poor temporal resolution. Involves radiation.",
      },
      {
        name: "MRI (Magnetic Resonance Imaging)",
        definition: "A technique that uses magnetic fields and radio waves to produce computer-generated images of soft tissue. MRI scans show brain anatomy with high resolution.",
        example: "Providing detailed images of brain structures, detecting tumors, tissue degeneration.",
        significance: "Excellent for detailed structural images. Does not show function in real-time.",
      },
      {
        name: "fMRI (Functional MRI)",
        definition: "A technique for revealing blood flow and, therefore, brain activity by comparing successive MRI scans. fMRI scans show brain function (by detecting changes in blood oxygen levels) as well as structure.",
        example: "Identifying which brain areas become more active when a person looks at faces versus objects.",
        significance: "Shows brain function/activity with good spatial resolution and better temporal resolution than PET. Currently a dominant tool in cognitive neuroscience.",
      },
      // Older Brain Structures
      {
        name: "Brainstem",
        definition: "The oldest part and central core of the brain, beginning where the spinal cord swells as it enters the skull; the brainstem is responsible for automatic survival functions. Includes medulla, pons, reticular formation.",
        significance: "Basic life support.",
      },
      {
        name: "Medulla",
        definition: "The base of the brainstem; controls heartbeat and breathing.",
        significance: "Vital for life. Damage is often fatal.",
      },
      {
        name: "Pons",
        definition: "Located just above the medulla; helps coordinate movements (especially left-right body coordination) and control sleep/arousal.",
        significance: "Connects different brain regions, involved in sleep cycles.",
      },
      {
        name: "Reticular Formation",
        definition: "A nerve network that travels through the brainstem and thalamus and plays an important role in controlling arousal (alertness and attention). Filters incoming stimuli.",
        example: "Damage can cause coma. Stimulation can awaken a sleeping cat.",
        significance: "Regulates consciousness and alertness.",
      },
      {
        name: "Thalamus",
        definition: "The brain's sensory control center, located on top of the brainstem; it directs messages to the sensory receiving areas in the cortex and transmits replies to the cerebellum and medulla. Receives information from all senses EXCEPT smell.",
        example: "Relaying visual information from the eyes to the visual cortex.",
        significance: "Sensory switchboard or relay station.",
      },
      {
        name: "Cerebellum",
        definition: "The \"little brain\" at the rear of the brainstem; functions include processing sensory input, coordinating movement output and balance, and enabling nonverbal learning and memory (procedural memory, classical conditioning).",
        example: "Helps coordinate smooth, voluntary movements like walking, playing piano. Alcohol affects the cerebellum, causing coordination problems.",
        significance: "Crucial for coordinated movement, balance, and some forms of learning.",
      },
      // Limbic System
      {
        name: "Limbic System",
        definition: "Neural system (including the hippocampus, amygdala, and hypothalamus) located below the cerebral hemispheres; associated with emotions and drives.",
        significance: "Center for emotions, memory formation, and basic motivations.",
      },
      {
        name: "Amygdala",
        definition: "Two lima-bean-sized neural clusters in the limbic system; linked to emotion, particularly fear and aggression.",
        example: "Stimulation can provoke fear or rage. Damage can reduce fear responses. Involved in processing emotional memories.",
        significance: "Key emotional center, especially for fear and anger.",
      },
      {
        name: "Hypothalamus", // Repeated from Endocrine System topic for context
        definition: "Neural structure below the thalamus; directs maintenance activities (eating, drinking, body temperature, sexual behavior), helps govern the endocrine system via the pituitary gland, and is linked to emotion and reward (pleasure centers).",
        example: "Regulating hunger signals; maintaining body temperature (homeostasis). Olds & Milner discovered reward centers here.",
        significance: "Regulates basic drives, homeostasis, hormones, and reward.",
      },
      {
        name: "Hippocampus",
        definition: "A neural center located in the limbic system; helps process explicit (conscious) memories—of facts and events—for storage. Decreases in size and function as we age.",
        example: "Damage prevents formation of new long-term declarative memories (like patient H.M.).",
        significance: "Crucial for forming new explicit memories.",
      },
      // Cerebral Cortex
      {
        name: "Cerebral Cortex",
        definition: "The intricate fabric of interconnected neural cells covering the cerebral hemispheres; the body's ultimate control and information-processing center. Higher-level thinking.",
        significance: "Responsible for complex functions like language, planning, reasoning.",
      },
      {
        name: "Frontal Lobes",
        definition: "Portion of the cerebral cortex lying just behind the forehead; involved in speaking and muscle movements and in making plans and judgments (executive functions). Includes motor cortex and prefrontal cortex.",
        example: "Planning a trip, deciding between options, inhibiting impulsive behavior. Damage (like Phineas Gage) can alter personality and judgment.",
        significance: "Higher-level cognition, personality, voluntary movement.",
      },
      {
        name: "Parietal Lobes",
        definition: "Portion of the cerebral cortex lying at the top of the head and toward the rear; receives sensory input for touch and body position (somatosensory cortex). Also involved in spatial awareness and navigation.",
        example: "Feeling a touch on your arm, determining where your body is in space.",
        significance: "Processes touch, temperature, pain, pressure, body position.",
      },
      {
        name: "Occipital Lobes",
        definition: "Portion of the cerebral cortex lying at the back of the head; includes areas that receive information from the visual fields (visual cortex).",
        example: "Processing shapes, colors, and movement seen by the eyes.",
        significance: "Primary area for vision processing.",
      },
      {
        name: "Temporal Lobes",
        definition: "Portion of the cerebral cortex lying roughly above the ears; includes the auditory areas (auditory cortex), each receiving information primarily from the opposite ear. Also involved in facial recognition and understanding language (Wernicke's area).",
        example: "Hearing sounds, understanding speech, recognizing faces.",
        significance: "Processes auditory information, language comprehension.",
      },
      {
        name: "Motor Cortex",
        definition: "An area at the rear of the frontal lobes that controls voluntary movements. Different parts map to different body parts (contralateral control).",
        example: "Sending signals to move your right hand (controlled by left motor cortex). More cortical space devoted to areas requiring precise control (fingers, mouth).",
        significance: "Initiates voluntary muscle movements.",
      },
      {
        name: "Somatosensory Cortex",
        definition: "Area at the front of the parietal lobes that registers and processes body touch and movement sensations. Different parts map to different body parts (contralateral input).",
        example: "Receiving signals when someone touches your left arm (processed in right somatosensory cortex). More cortical space devoted to sensitive areas (lips, fingertips).",
        significance: "Receives input for touch, pressure, temperature, pain.",
      },
      {
        name: "Association Areas",
        definition: "Areas of the cerebral cortex that are not involved in primary motor or sensory functions; rather, they are involved in higher mental functions such as learning, remembering, thinking, planning, and speaking. Make up the largest portion of the cortex.",
        example: "Prefrontal cortex (judgment, planning), areas integrating sensory input with memory, areas involved in language.",
        significance: "Where complex cognition occurs; integrate information from different brain regions.",
      },
      {
        name: "Prefrontal Cortex",
        definition: "The forward part of the frontal lobes, enables judgment, planning, processing of new memories, inhibiting inappropriate actions, and aspects of personality. Develops fully in mid-twenties.",
        example: "Weighing consequences before acting, setting long-term goals.",
        significance: "Center for executive functions and personality expression.",
      },
      {
        name: "Plasticity",
        definition: "The brain's ability to change, especially during childhood, by reorganizing after damage or by building new pathways based on experience.",
        example: "If one hemisphere is damaged early in life, the other may take over some of its functions. Learning a new skill like playing an instrument changes brain structure. Blind people's visual cortex may adapt to process touch or sound.",
        significance: "Allows the brain to adapt to experience and recover from injury (though recovery diminishes with age).",
      },
      {
        name: "Neurogenesis",
        definition: "The formation of new neurons. Occurs primarily during prenatal development but also continues in limited areas of the adult brain (e.g., hippocampus).",
        example: "Stem cells generating new neurons in the hippocampus. Exercise, sleep, and stimulating environments can promote neurogenesis.",
        significance: "Potential mechanism for learning, memory, and repair (though limited in adults).",
      },
    ]
  },
  {
    title: "Topic 2.9: Brain Organization and Hemispheric Specialization",
    terms: [
       {
        name: "Corpus Callosum",
        definition: "The large band of neural fibers connecting the two brain hemispheres and carrying messages between them.",
        example: "Allows the left hemisphere (language) to know what the right hemisphere (spatial perception) is processing.",
        significance: "Enables communication and integration between the hemispheres.",
      },
      {
        name: "Split Brain",
        definition: "A condition resulting from surgery that isolates the brain's two hemispheres by cutting the fibers (mainly those of the corpus callosum) connecting them. Used in the past to treat severe epilepsy.",
        example: "A split-brain patient shown an object in the left visual field (processed by the right hemisphere) cannot verbally name it (language is typically in the left hemisphere), but can pick it up with their left hand (controlled by the right hemisphere).",
        significance: "Seminal research by Sperry and Gazzaniga revealed hemispheric specialization (lateralization).",
      },
      {
        name: "Lateralization (Hemispheric Specialization)",
        definition: "The tendency for some neural functions or cognitive processes to be specialized to one side of the brain or the other.",
        example: "Language processing (speaking, reading, writing, comprehension) is typically lateralized to the left hemisphere for most right-handed people. Spatial reasoning, facial recognition, and perceiving emotion are often associated more with the right hemisphere.",
        significance: "Shows that although the hemispheres work together, they have specialized roles. Note: This does NOT mean people are strictly \"left-brained\" or \"right-brained\" in personality.",
      },
      {
        name: "Left Hemisphere Specialization",
        definition: "Typically associated with language (speech production - Broca's area; language comprehension - Wernicke's area), logic, mathematical reasoning, analysis, sequential processing. Controls right side of body.",
        significance: "Dominant for most language functions, logical analysis.",
      },
      {
        name: "Right Hemisphere Specialization",
        definition: "Typically associated with spatial abilities (e.g., map reading, geometry), facial recognition, processing music, visual imagery, synthesizing information (seeing the \"whole\"), perceiving and expressing emotion. Controls left side of body.",
        significance: "Dominant for spatial tasks, recognizing faces and emotions, holistic processing.",
      },
      {
        name: "Broca's Area",
        definition: "An area, usually in the left frontal lobe, that directs the muscle movements involved in speech production.",
        example: "Damage leads to Broca's aphasia (expressive aphasia) – difficulty speaking fluently, forming grammatical sentences, but comprehension is relatively intact.",
        significance: "Crucial for generating spoken language. Key Figure: Paul Broca.",
      },
      {
        name: "Wernicke's Area",
        definition: "An area, usually in the left temporal lobe, involved in language comprehension and expression.",
        example: "Damage leads to Wernicke's aphasia (receptive aphasia) – difficulty understanding spoken and written language; speech may be fluent but nonsensical (\"word salad\").",
        significance: "Crucial for understanding language. Key Figure: Carl Wernicke.",
      },
    ]
  },
  {
    title: "Topic 2.10: Consciousness and Sleep",
    terms: [
      {
        name: "Consciousness",
        definition: "Our subjective awareness of ourselves and our environment. Includes awareness of internal states (thoughts, feelings) and external stimuli.",
        example: "Being aware of the words you are reading right now; feeling tired; noticing the temperature of the room.",
        significance: "A central, yet difficult to define, concept in psychology. Studied through different states (waking, sleeping, dreaming, hypnosis, drug-induced).",
      },
      {
        name: "Cognitive Neuroscience",
        definition: "The interdisciplinary study of the brain activity linked with cognition (including perception, thinking, memory, and language). Aims to relate specific brain states to conscious experiences.",
        example: "Using fMRI to see which brain areas are active during decision-making or visual awareness tasks.",
        significance: "Seeks the biological basis of consciousness and thought.",
      },
      {
        name: "Dual Processing",
        definition: "The principle that information is often simultaneously processed on separate conscious (explicit) and unconscious (implicit) tracks.",
        example: "Seeing a bird (conscious perception of object, color, movement) while simultaneously unconsciously processing its distance, trajectory, and identity based on past experience. Blindsight (responding to visual stimuli without consciously seeing them) is another example.",
        significance: "Much of our information processing occurs outside our conscious awareness. The \"two-track mind.\"",
      },
      {
        name: "Blindsight",
        definition: "A condition in which a person can respond to a visual stimulus without consciously experiencing it. Often due to damage to the primary visual cortex.",
        example: "A person with blindsight might correctly guess the orientation of a line or reach accurately for an object they report not seeing.",
        significance: "Strong evidence for dual processing – unconscious visual track remains functional.",
      },
      {
        name: "Parallel Processing",
        definition: "Processing many aspects of a problem or stimulus simultaneously; the brain's natural mode of information processing for many functions, including vision. Contrasts with the step-by-step (serial) processing of most computers and of conscious problem solving.",
        example: "When you see a bus, your brain processes its color, shape, motion, and distance all at once.",
        significance: "Enables efficient and rapid processing of complex information. Often occurs unconsciously.",
      },
      {
        name: "Sequential Processing",
        definition: "Processing one aspect of a problem at a time; generally used when focusing attention or solving difficult problems that require conscious effort.",
        example: "Working through a math problem step-by-step; learning a new skill consciously.",
        significance: "Necessary for focused attention and solving novel problems.",
      },
      {
        name: "Sleep",
        definition: "Periodic, natural loss of consciousness—as distinct from unconsciousness resulting from a coma, general anesthesia, or hibernation. Characterized by distinct stages.",
        significance: "Essential biological function with roles in restoration, memory consolidation, growth, and energy conservation.",
      },
      {
        name: "Circadian Rhythm",
        definition: "The biological clock; regular bodily rhythms (for example, of temperature and wakefulness) that occur on a 24-hour cycle.",
        example: "Natural tendency to feel sleepy at night and wakeful during the day. Influenced by light.",
        significance: "Governs sleep-wake cycle, hormone release, body temperature. Disruption (e.g., jet lag, shift work) can cause problems.",
      },
      {
        name: "Suprachiasmatic Nucleus (SCN)",
        definition: "A pair of cell clusters in the hypothalamus that controls circadian rhythm. In response to light, the SCN causes the pineal gland to adjust melatonin production, thus modifying feelings of sleepiness.",
        example: "Light detected by the retina signals the SCN, which then suppresses melatonin release from the pineal gland, promoting wakefulness.",
        significance: "The brain's master clock coordinating circadian rhythms.",
      },
      {
        name: "Melatonin",
        definition: "A hormone secreted by the pineal gland that induces sleepiness. Production increases in the evening and decreases in the morning.",
        example: "Taking melatonin supplements is sometimes used to combat jet lag or insomnia.",
        significance: "Key hormone regulating the sleep-wake cycle.",
      },
      // Sleep Stages
       {
        name: "Sleep Stages",
        definition: "Distinct periods of sleep characterized by different patterns of brain wave activity, measured by EEG. Humans typically cycle through NREM and REM stages multiple times per night.",
        significance: "Understanding sleep stages is crucial for diagnosing sleep disorders and understanding sleep's functions.",
        // Sub-terms below are listed individually for clarity
      },
      {
        name: "NREM Sleep (Non-Rapid Eye Movement Sleep)",
        definition: "Encompasses all sleep stages except for REM sleep (NREM-1, NREM-2, NREM-3). Characterized by progressively slower brain waves.",
        significance: "Constitutes the majority of sleep time; important for physical restoration.",
      },
      {
        name: "NREM-1",
        definition: "Light sleep; transition stage between wakefulness and sleep. May experience hypnagogic sensations. EEG shows theta waves. (Few minutes)",
        significance: "Initial, lightest stage of sleep.",
      },
      {
        name: "NREM-2",
        definition: "Deeper relaxation. Characterized by sleep spindles and K-complexes. Clearly asleep. EEG shows theta waves dominate, but with spindles/K-complexes. (About 20 mins initially, bulk of night's sleep)",
        significance: "Majority of sleep is spent in this stage; important for memory consolidation.",
      },
      {
        name: "NREM-3",
        definition: "Deep sleep (slow-wave sleep). Hard to awaken. Body repairs tissues, growth hormone released. EEG shows large, slow delta waves. (About 30 mins initially, less as night progresses).",
        significance: "Most restorative sleep stage; crucial for physical growth and repair.",
      },
      {
        name: "REM Sleep (Rapid Eye Movement Sleep)",
        definition: "A recurring sleep stage during which vivid dreams commonly occur. Also known as paradoxical sleep, because the muscles are relaxed (motor cortex active, but brainstem blocks messages) but other body systems (brain activity, heart rate, breathing) are active. Eyes move rapidly.",
        example: "Where most memorable dreaming happens. Genital arousal occurs.",
        significance: "Important for memory consolidation, emotional processing, learning. Amount increases as night progresses.",
      },
      {
        name: "Alpha Waves",
        definition: "The relatively slow brain waves of a relaxed, awake state.",
        example: "Measured by EEG when you are calm and resting with eyes closed.",
        significance: "Indicate relaxed wakefulness, transition to sleep.",
      },
      {
        name: "Theta Waves",
        definition: "Brain waves indicating the early stages of sleep (NREM-1, NREM-2). Slower than alpha waves.",
        significance: "Characteristic of light sleep.",
      },
      {
        name: "Delta Waves",
        definition: "The large, slow brain waves associated with deep sleep (NREM-3).",
        significance: "Indicate deep, restorative sleep.",
      },
      {
        name: "Sleep Spindles",
        definition: "Bursts of rapid, rhythmic brain-wave activity characteristic of NREM-2 sleep.",
        significance: "Marker for NREM-2; may play role in memory consolidation.",
      },
      {
        name: "K-Complexes",
        definition: "Large, slow waves characteristic of NREM-2 sleep, often triggered by external stimuli.",
        significance: "Marker for NREM-2; thought to suppress arousal and aid memory consolidation.",
      },
      {
        name: "Hypnagogic Sensations",
        definition: "Bizarre experiences, such as jerking or a feeling of falling or floating weightlessly, while transitioning into sleep (NREM-1).",
        example: "Suddenly twitching or feeling like you missed a step on the stairs just as you drift off.",
        significance: "Normal phenomena during sleep onset.",
      },
      {
        name: "Sleep Deprivation",
        definition: "Lack of sufficient sleep.",
        example: "Effects: Fatigue, irritability, impaired concentration, decreased cognitive performance, depressed immune system, greater vulnerability to accidents, linked to weight gain and other health problems.",
        significance: "Major public health issue with significant consequences.",
      },
      {
        name: "Insomnia",
        definition: "Recurring problems in falling or staying asleep.",
        example: "Lying awake for hours, waking frequently, waking too early.",
        significance: "Common sleep disorder; often worsened by worrying about it. Treatment involves lifestyle changes, CBT-I, sometimes medication (used cautiously).",
      },
      {
        name: "Narcolepsy",
        definition: "A sleep disorder characterized by uncontrollable sleep attacks. The sufferer may lapse directly into REM sleep, often at inopportune times. Often accompanied by cataplexy (sudden loss of muscle tone).",
        example: "Suddenly falling asleep during a conversation or while driving.",
        significance: "Neurological disorder affecting the brain's control of sleep-wake cycles. Linked to lack of hypocretin/orexin.",
      },
      {
        name: "Sleep Apnea",
        definition: "A sleep disorder characterized by temporary cessations of breathing during sleep and repeated momentary awakenings. Often associated with loud snoring.",
        example: "Person stops breathing hundreds of times a night, often without awareness, leading to daytime sleepiness and potential health risks (e.g., cardiovascular problems).",
        significance: "Common, especially in overweight individuals. Often treated with a CPAP machine.",
      },
      {
        name: "Night Terrors",
        definition: "A sleep disorder characterized by high arousal and an appearance of being terrified; unlike nightmares, night terrors occur during NREM-3 sleep, within two or three hours of falling asleep, and are seldom remembered. More common in children.",
        example: "Child sits up, screams, appears terrified but is unresponsive and has no memory of it later.",
        significance: "Different from nightmares (which occur in REM sleep and are usually remembered). Usually benign and outgrown.",
      },
      {
        name: "Dream",
        definition: "A sequence of images, emotions, and thoughts passing through a sleeping person's mind. Dreams are notable for their hallucinatory imagery, discontinuities, and incongruities, and for the dreamer's delusional acceptance of the content and later difficulties remembering it. Primarily occur during REM sleep.",
        significance: "Subjective experience during sleep; various theories attempt to explain their purpose.",
      },
      {
        name: "Manifest Content (Freud)",
        definition: "According to Freud, the remembered story line of a dream (as distinct from its latent, or hidden, content).",
        example: "Dreaming you are flying.",
        significance: "The surface level narrative of the dream in Freud's psychoanalytic theory.",
      },
      {
        name: "Latent Content (Freud)",
        definition: "According to Freud, the underlying meaning of a dream (as distinct from its manifest content). Believed to reflect unconscious wishes and drives, often disguised symbolically.",
        example: "Freud might interpret dreaming of flying as representing unconscious desires for freedom or sexual urges.",
        significance: "The hidden, symbolic meaning in Freud's theory; interpretation is subjective and lacks scientific validation.",
      },
      {
        name: "Wish Fulfillment Theory (Freud)",
        definition: "Freud's theory that dreams provide a psychic \"safety valve\"—expressing otherwise unacceptable feelings; contain manifest (remembered) content and a deeper layer of latent content (a hidden meaning). Dreams satisfy unconscious wishes.",
        significance: "Historically influential but lacks empirical support. Modern dream theories offer alternative explanations.",
      },
      {
        name: "Information-Processing Theory (Dreams)",
        definition: "Theory that dreams help us sort out the day's events and consolidate our memories.",
        example: "Dreaming about tasks or problems encountered during the day. REM sleep is known to aid memory consolidation.",
        significance: "Links dreaming to cognitive functions like memory formation and problem-solving.",
      },
      {
        name: "Physiological Function Theory (Dreams)",
        definition: "Theory that regular brain stimulation from REM sleep may help develop and preserve neural pathways. Brain activity during REM provides periodic stimulation.",
        example: "Infants spend much more time in REM sleep, possibly aiding brain development.",
        significance: "Suggests dreaming has a role in maintaining brain health and plasticity.",
      },
      {
        name: "Activation-Synthesis Theory",
        definition: "Theory that dreams are the brain's attempt to synthesize random neural activity (activation) originating in the brainstem during REM sleep. Dreams are the forebrain's interpretation of these random signals.",
        example: "Random signals activating visual or motor areas might be interpreted by the cortex as seeing images or feeling movement in a dream.",
        significance: "Emphasizes the biological basis of dreaming; views dreams as neurological byproduct rather than deeply meaningful. Key Figures: Hobson & McCarley.",
      },
      {
        name: "Cognitive Development Theory (Dreams)",
        definition: "Theory that dream content reflects dreamers' level of cognitive development—their knowledge and understanding. Dreams simulate our lives, including worst-case scenarios.",
        example: "Children's dreams are often simpler and less narrative than adults'. Dreams draw on our concepts and knowledge.",
        significance: "Views dreaming as part of brain maturation and cognitive development.",
      },
      {
        name: "REM Rebound",
        definition: "The tendency for REM sleep to increase following REM sleep deprivation (created by repeated awakenings during REM sleep).",
        example: "After several nights of being woken up every time REM starts, a person will spend more time in REM sleep when finally allowed to sleep undisturbed.",
        significance: "Suggests REM sleep serves a biological need.",
      },
    ]
  },
  {
    title: "Topic 2.11: Psychoactive Drugs",
    terms: [
      {
        name: "Psychoactive Drug",
        definition: "A chemical substance that alters perceptions and moods by affecting neurotransmitter function or mimicking neurotransmitters.",
        example: "Caffeine, alcohol, nicotine, cocaine, LSD, marijuana.",
        significance: "Can lead to altered states of consciousness, dependence, and addiction.",
      },
      {
        name: "Substance Use Disorder",
        definition: "Continued substance craving and use despite significant life disruption and/or physical risk. Characterized by impaired control, social impairment, risky use, and pharmacological criteria (tolerance, withdrawal).",
        example: "Someone continuing to drink alcohol heavily even after losing their job and damaging relationships due to drinking.",
        significance: "Clinically defined pattern of problematic substance use. Replaces older terms like \"abuse\" and \"dependence\" in many contexts (DSM-5).",
      },
      {
        name: "Tolerance",
        definition: "The diminishing effect with regular use of the same dose of a drug, requiring the user to take larger and larger doses before experiencing the drug's effect. Results from neuroadaptation.",
        example: "A coffee drinker needing three cups to get the same effect that one cup used to provide.",
        significance: "Key aspect of substance use disorder; increases risk of overdose.",
      },
      {
        name: "Withdrawal",
        definition: "The discomfort and distress that follow discontinuing an addictive drug or behavior. Symptoms are often the opposite of the drug's effects.",
        example: "Headaches and fatigue after stopping caffeine; anxiety, tremors, and nausea after stopping heavy alcohol use.",
        significance: "Indicates physical or psychological dependence; motivates continued drug use to avoid unpleasant symptoms.",
      },
      {
        name: "Addiction",
        definition: "Compulsive craving of drugs or certain behaviors (such as gambling) despite known adverse consequences. Often involves tolerance and withdrawal. Now often encompassed within the term Substance Use Disorder.",
        example: "Being unable to stop using cocaine despite negative health, financial, and social consequences.",
        significance: "A primary, chronic disease of brain reward, motivation, memory and related circuitry.",
      },
      // Drug Categories
      {
        name: "Depressants",
        definition: "Drugs (such as alcohol, barbiturates, and opiates) that reduce neural activity and slow body functions.",
        significance: "High potential for abuse and dependence; dangerous when mixed.",
        // Subtypes listed below
      },
      {
        name: "Alcohol",
        definition: "A widely used depressant that acts as a GABA agonist and glutamate antagonist.",
        example: "Slowed neural processing, memory disruption (blackouts), reduced inhibition, impaired judgment, slowed reaction time.",
        significance: "Significant social and health impacts; involved in many accidents and crimes.",
      },
      {
        name: "Barbiturates (Tranquilizers)",
        definition: "Drugs that depress CNS activity, reducing anxiety but impairing memory/judgment (e.g., Nembutal, Seconal). Enhance GABA.",
        significance: "Highly addictive, dangerous overdose potential, especially when combined with alcohol. Largely replaced by benzodiazepines for anxiety treatment.",
      },
      {
        name: "Opiates",
        definition: "Opium and its derivatives (morphine, heroin, codeine, oxycodone); depress neural activity, lessening pain/anxiety. Bind to endorphin receptors.",
        significance: "Highly addictive, severe withdrawal, high overdose risk (respiratory depression). Includes prescription painkillers contributing to the opioid crisis.",
      },
      {
        name: "Stimulants",
        definition: "Drugs (caffeine, nicotine, amphetamines, cocaine, Ecstasy, meth) that excite neural activity and speed up body functions.",
        significance: "Increase alertness, energy, mood. Can cause anxiety, insomnia, paranoia. High addiction potential.",
        // Subtypes listed below
      },
      {
        name: "Amphetamines",
        definition: "Drugs (including methamphetamine, Adderall) stimulating neural activity, causing speeded-up body functions and associated energy/mood changes.",
        example: "Increase release/block reuptake of dopamine/norepinephrine.",
        significance: "Used medically for ADHD/narcolepsy, but high potential for abuse.",
      },
      {
        name: "Nicotine",
        definition: "A stimulating and highly addictive psychoactive drug found in tobacco and vaping products.",
        example: "Triggers epinephrine, norepinephrine, dopamine release. Effects: arousal, relaxation, reduced appetite.",
        significance: "Major preventable cause of death worldwide due to associated health risks (cancer, heart disease). Withdrawal includes craving, insomnia, anxiety.",
      },
      {
        name: "Caffeine",
        definition: "A widely consumed stimulant found in coffee, tea, soda, and chocolate. Blocks adenosine receptors.",
        significance: "Increases alertness, reduces fatigue. Can cause anxiety, insomnia in high doses. Withdrawal: headache, tiredness.",
      },
      {
        name: "Cocaine",
        definition: "A powerful and addictive stimulant derived from the coca plant; produces temporary alertness and euphoria.",
        example: "Blocks dopamine, norepinephrine, serotonin reuptake. Rush followed by crash.",
        significance: "High dependence risk, cardiovascular stress, paranoia.",
      },
      {
        name: "Methamphetamine (Meth)",
        definition: "A powerfully addictive drug that stimulates the central nervous system, with speeded-up body functions and associated energy/mood changes; over time, appears to reduce baseline dopamine levels.",
        significance: "Longer effects than cocaine. High addiction potential, severe dental problems ('meth mouth'), paranoia, potential brain damage.",
      },
      {
        name: "Ecstasy (MDMA)",
        definition: "A synthetic stimulant and mild hallucinogen. Produces euphoria and social intimacy (empathogen).",
        example: "Triggers dopamine/serotonin release (blocks serotonin reuptake).",
        significance: "Risks: dehydration, overheating, increased blood pressure; potential long-term harm to serotonin neurons, mood/cognition.",
      },
      {
        name: "Hallucinogens (Psychedelics)",
        definition: "Psychedelic (\"mind-manifesting\") drugs (such as LSD and marijuana) that distort perceptions and evoke sensory images in the absence of sensory input.",
        significance: "Effects are highly variable and depend on dose, setting, and user expectations. Can trigger psychosis in vulnerable individuals.",
        // Subtypes listed below
      },
      {
        name: "LSD (Lysergic Acid Diethylamide)",
        definition: "A powerful hallucinogenic drug; also known as acid.",
        example: "Structurally similar to serotonin; blocks serotonin subtype receptors.",
        significance: "Effects include visual hallucinations ('trips'), emotional swings, altered perception of time and reality.",
      },
      {
        name: "Marijuana (Cannabis)",
        definition: "A plant containing THC and other cannabinoids; produces a mix of mild hallucinogenic, depressant, and stimulant effects.",
        significance: "Most commonly used illicit drug in many places. Effects vary widely. Medical uses researched for pain, nausea, etc. Potential for psychological dependence.",
      },
      {
        name: "THC (delta-9-tetrahydrocannabinol)",
        definition: "The major active ingredient in marijuana; triggers a variety of effects, including mild hallucinations, relaxation, and euphoria.",
        example: "Binds to cannabinoid receptors in the brain.",
        significance: "Responsible for most of marijuana's psychoactive effects. Impairs memory, coordination, reaction time.",
      },
    ]
  },
]

// Sample data for Unit 3 (Placeholders remain)
// Data structure for Unit 3 (Updated with provided terms)
const unit3Topics = [
  {
    title: "Topic 3.1: Basic Principles of Sensation and Perception",
    terms: [
      {
        name: "Sensation",
        definition: "The process by which our sensory receptors and nervous system receive and represent stimulus energies from our environment. The raw data input.",
        example: "Light waves hitting the retina; sound waves entering the ear; pressure on the skin.",
        significance: "The starting point for experiencing the world.",
      },
      {
        name: "Perception",
        definition: "The process of organizing and interpreting sensory information, enabling us to recognize meaningful objects and events. Making sense of the raw data.",
        example: "Recognizing the light waves as a familiar face; interpreting the sound waves as speech; identifying the pressure as a handshake.",
        significance: "How we construct our experience of reality from sensory input.",
      },
      {
        name: "Bottom-Up Processing",
        definition: "Analysis that begins with the sensory receptors and works up to the brain's integration of sensory information. Data-driven.",
        example: "Detecting lines, angles, and colors that form a picture; assembling puzzle pieces based on their shapes and colors without seeing the final picture.",
        significance: "Emphasizes the role of sensory data in perception.",
      },
      {
        name: "Top-Down Processing",
        definition: "Information processing guided by higher-level mental processes, as when we construct perceptions drawing on our experience, expectations, knowledge, and context. Conceptually driven.",
        example: "Reading misspelled words easily because you expect certain letters; recognizing a familiar song even if some notes are missing; interpreting ambiguous figures based on context.",
        significance: "Shows how our minds shape what we perceive based on prior knowledge and expectations.",
      },
      {
        name: "Selective Attention",
        definition: "The focusing of conscious awareness on a particular stimulus, while ignoring others.",
        example: "Focusing on a conversation in a noisy room (cocktail party effect); concentrating on reading this text while ignoring background sounds.",
        significance: "Allows us to filter vast amounts of sensory information and focus on what's important, but means we miss much of what happens around us.",
      },
      {
        name: "Cocktail Party Effect",
        definition: "Your ability to attend to only one voice among many. However, if another voice speaks your name, your cognitive radar, operating on the unattended track, will instantly bring that voice into consciousness.",
        example: "Tuning out surrounding chatter at a party until you hear your name mentioned across the room.",
        significance: "Demonstrates selective attention and the ability of significant stimuli to break through the attentional filter (part of dual processing).",
      },
      {
        name: "Inattentional Blindness",
        definition: "Failing to see visible objects when our attention is directed elsewhere.",
        example: "The famous experiment where observers counting basketball passes fail to notice a person in a gorilla suit walking through the scene.",
        significance: "Highlights the limitations of attention; we are \"blind\" to much of what we aren't actively looking for.",
      },
      {
        name: "Change Blindness",
        definition: "Failing to notice changes in the environment; a form of inattentional blindness.",
        example: "Failing to notice when a person you are talking to is replaced by someone else during a brief interruption (if the change is not drastic). Failing to spot differences between two similar pictures shown sequentially.",
        significance: "Shows that our perception of a continuous, detailed visual world can be an illusion; we often encode only the \"gist\" of a scene.",
      },
      {
        name: "Transduction",
        definition: "Conversion of one form of energy into another. In sensation, the transforming of stimulus energies, such as sights, sounds, and smells, into neural impulses our brain can interpret.",
        example: "Rods and cones in the eye convert light energy into neural signals; hair cells in the ear convert sound vibrations into neural signals.",
        significance: "The crucial step allowing the physical world to be represented in the nervous system.",
      },
      {
        name: "Psychophysics",
        definition: "The study of relationships between the physical characteristics of stimuli, such as their intensity, and our psychological experience of them.",
        example: "Studying how much louder a sound needs to be before we notice a difference. Key Figures: Gustav Fechner, Ernst Weber.",
        significance: "Early field that aimed to quantify the relationship between the physical and psychological worlds.",
      },
      {
        name: "Absolute Threshold",
        definition: "The minimum stimulus energy needed to detect a particular stimulus (light, sound, pressure, taste, odor) 50 percent of the time.",
        example: "The faintest sound you can hear half the time; the dimmest light you can see half the time.",
        significance: "Defines the limits of our sensory detection abilities. Varies between individuals and conditions.",
      },
      {
        name: "Signal Detection Theory",
        definition: "A theory predicting how and when we detect the presence of a faint stimulus (\"signal\") amidst background stimulation (\"noise\"). Assumes there is no single absolute threshold and that detection depends partly on a person's experience, expectations, motivation, and alertness. Considers \"hits,\" \"misses,\" \"false alarms,\" and \"correct rejections.\"",
        example: "A radiologist deciding if a faint spot on an X-ray is a tumor or just noise; an air traffic controller listening for a faint plane signal. Their decision depends on the signal strength AND their decision criteria (e.g., consequences of missing vs. false alarm).",
        significance: "More realistic model of detection than simple absolute threshold; accounts for psychological factors.",
      },
      {
        name: "Subliminal",
        definition: "Below one's absolute threshold for conscious awareness. A stimulus presented so quickly or faintly that it is not consciously detected 50% of the time.",
        example: "A visual image flashed too briefly to be consciously seen.",
        significance: "Subliminal stimuli can be processed unconsciously and have brief, subtle effects (priming), but claims of powerful subliminal persuasion are largely unsubstantiated.",
      },
      {
        name: "Priming",
        definition: "The activation, often unconsciously, of certain associations, thus predisposing one's perception, memory, or response.",
        example: "Briefly showing the word \"rabbit\" may make someone later more likely to spell the spoken word \"hair\" as \"h-a-r-e.\" Exposure to negative words can briefly influence interpretations of ambiguous behavior.",
        significance: "Demonstrates unconscious processing and how recent experiences can influence subsequent thoughts and actions. Can occur with both supraliminal and subliminal stimuli.",
      },
      {
        name: "Difference Threshold (Just Noticeable Difference - JND)",
        definition: "The minimum difference between two stimuli required for detection 50 percent of the time. We experience the difference threshold as a just noticeable difference (jnd).",
        example: "The smallest change in volume you can detect; the smallest difference in weight between two objects you can discern.",
        significance: "Measures our ability to discriminate between stimuli.",
      },
      {
        name: "Weber's Law",
        definition: "The principle that, to be perceived as different, two stimuli must differ by a constant minimum percentage (rather than a constant amount). The percentage varies depending on the stimulus.",
        example: "To notice a difference in weight, the second object must differ by about 2%. To notice a difference in light intensity, it must differ by about 8%. You'll notice adding 1 oz to a 10 oz weight, but not adding 1 oz to a 100 oz weight.",
        significance: "Quantifies the relationship for difference thresholds; explains why JND is proportional to the magnitude of the original stimulus. Key Figure: Ernst Weber.",
      },
      {
        name: "Sensory Adaptation",
        definition: "Diminished sensitivity as a consequence of constant stimulation. Sensory receptors become less responsive to unchanging stimuli.",
        example: "Not noticing the feeling of your watch on your wrist after wearing it for a while; adjusting to a bad smell in a room; eyes adjusting to darkness or bright light (though this also involves pupil changes and photoreceptor processes).",
        significance: "Allows us to focus on informative *changes* in our environment without being distracted by constant, uninformative stimulation. Frees up attentional resources. Does not typically occur with intense pain.",
      },
    ],
  },
  {
    title: "Topic 3.2: Influences on Perception",
    terms: [
      {
        name: "Perceptual Set",
        definition: "A mental predisposition to perceive one thing and not another. Based on experiences, assumptions, expectations, context, motivation, and emotion. A form of top-down processing.",
        example: "Seeing the Loch Ness monster in a log because you expect to see it; interpreting an ambiguous figure (like the old woman/young woman) based on what you were primed to see; tasting fries as better when served in a McDonald's bag.",
        significance: "Shows how our mental state influences what we perceive from the same sensory input.",
      },
      {
        name: "Context Effects",
        definition: "The influence of environmental factors (context) on one's perception of a stimulus. A form of top-down processing.",
        example: "Perceiving \"eel\" when the last word in \"The _eel is on the wagon\" is covered versus perceiving \"wheel\" when \"The _eel is on the orange\" is covered. A tall person may seem shorter when standing next to a professional basketball player.",
        significance: "Demonstrates that perception is influenced by the surrounding situation and information.",
      },
      {
        name: "Motivation and Emotion Effects",
        definition: "Our motivations (e.g., desires, needs) and emotions can influence our perceptions.",
        example: "A desired object (like a water bottle when thirsty) may seem closer. A hill may look steeper when carrying a heavy backpack or feeling tired. Hearing sad music can predispose people to perceive ambiguous words or situations negatively.",
        significance: "Shows that perception is not purely objective; our internal states color our experiences.",
      },
    ],
  },
  {
    title: "Topic 3.3: Vision: Sensory and Perceptual Processing",
    terms: [
      {
        name: "Wavelength (Light)",
        definition: "The distance from the peak of one light or sound wave to the peak of the next. In light, wavelength determines hue (color).",
        example: "Short wavelengths perceived as blue/violet; long wavelengths perceived as red/orange.",
        significance: "Physical property determining the color we see.",
      },
      {
        name: "Hue",
        definition: "The dimension of color that is determined by the wavelength of light; what we know as the color names blue, green, and so forth.",
        significance: "The psychological experience of color.",
      },
      {
        name: "Intensity (Light)",
        definition: "The amount of energy in a light or sound wave, which influences perceived brightness or loudness. Determined by wave's amplitude (height).",
        example: "High amplitude light waves perceived as bright; low amplitude as dim.",
        significance: "Physical property determining perceived brightness.",
      },
      {
        name: "Brightness",
        definition: "The perceived intensity of light. Determined by the amplitude of light waves.",
        significance: "The psychological experience of light intensity.",
      },
      {
        name: "Cornea",
        definition: "The eye's clear, protective outer layer, covering the pupil and iris. Bends light to help provide focus.",
        significance: "Protects eye and begins focusing process.",
      },
      {
        name: "Pupil",
        definition: "The adjustable opening in the center of the eye through which light enters.",
        significance: "Controls amount of light reaching the retina.",
      },
      {
        name: "Iris",
        definition: "A ring of muscle tissue that forms the colored portion of the eye around the pupil and controls the size of the pupil opening, regulating light entry.",
        significance: "Adjusts pupil size in response to light intensity and emotional states.",
      },
      {
        name: "Lens",
        definition: "The transparent structure behind the pupil that changes shape (accommodation) to help focus images on the retina.",
        significance: "Fine-tunes focus for objects at different distances.",
      },
      {
        name: "Accommodation",
        definition: "The process by which the eye's lens changes shape to focus near or far objects on the retina.",
        significance: "Allows clear vision at varying distances. Problems lead to nearsightedness/farsightedness.",
      },
      {
        name: "Retina",
        definition: "The light-sensitive inner surface of the eye, containing receptor rods and cones plus layers of neurons (bipolar, ganglion cells) that begin processing visual information. Image projected is upside-down/reversed.",
        significance: "Site of photoreception and transduction of light into neural signals.",
      },
      {
        name: "Photoreceptors",
        definition: "Light-sensitive cells (rods and cones) in the retina that convert light energy into neural signals.",
        significance: "Perform transduction for vision.",
         // Subtypes listed below
      },
      {
        name: "Rods",
        definition: "Retinal receptors detecting black, white, gray; sensitive to movement; necessary for peripheral and twilight vision. Located mainly in periphery.",
        significance: "Responsible for vision in dim light; poor detail, no color. High sensitivity, low acuity.",
      },
      {
        name: "Cones",
        definition: "Retinal receptors concentrated near center (fovea); function in daylight/well-lit conditions. Detect fine detail and give rise to color sensations.",
        significance: "Responsible for color vision and visual acuity. Require brighter light. Low sensitivity, high acuity.",
      },
      {
        name: "Fovea",
        definition: "The central focal point in the retina, around which the eye's cones cluster. Contains only cones.",
        significance: "Area of sharpest vision (highest visual acuity).",
      },
      {
        name: "Optic Nerve",
        definition: "The nerve that carries neural impulses from the eye to the brain (thalamus -> visual cortex). Formed by ganglion cell axons.",
        significance: "Transmits visual information from retina to brain.",
      },
      {
        name: "Blind Spot",
        definition: "The point where the optic nerve leaves the eye, creating a \"blind\" spot because no receptor cells are there.",
        significance: "Demonstrates a gap in visual field, normally filled in by brain.",
      },
      {
        name: "Bipolar Cells",
        definition: "Neurons in the retina receiving signals from rods/cones and transmitting them to ganglion cells.",
        significance: "Intermediate layer in retinal processing.",
      },
      {
        name: "Ganglion Cells",
        definition: "Neurons in the retina whose axons form the optic nerve. Receive signals from bipolar cells.",
        significance: "Output pathway from eye; respond to patterns, edges, movement.",
      },
      {
        name: "Young-Helmholtz Trichromatic (Three-Color) Theory",
        definition: "Theory that retina contains three types of color receptors (cones)—sensitive to red, green, blue—which combine to produce perception of any color.",
        example: "Stimulation of red + green cones = yellow.",
        significance: "Explains color vision at receptor level. Explains red-green color blindness. Key Figures: Young, Helmholtz.",
      },
      {
        name: "Opponent-Process Theory",
        definition: "Theory that opposing retinal processes (red-green, yellow-blue, white-black) enable color vision. Some cells stimulated by one color, inhibited by opponent.",
        example: "Staring at green leads to red afterimage (green cells fatigued, opponent red cells rebound).",
        significance: "Explains afterimages, color pairings. Complements trichromatic theory (stages). Key Figure: Ewald Hering.",
      },
      {
        name: "Afterimage",
        definition: "Visual image persisting after stimulus removal. Explained by opponent-process theory.",
        example: "Seeing green afterimage after staring at red object.",
        significance: "Supports opponent-process theory.",
      },
      {
        name: "Color Blindness (Color Vision Deficiency)",
        definition: "Inability or decreased ability to see color or perceive differences. Most common: red-green deficiency due to missing red/green cones.",
        significance: "Illustrates biological basis described by trichromatic theory. More common in males (sex-linked gene).",
      },
      {
        name: "Feature Detectors",
        definition: "Nerve cells in visual cortex responding to specific features (shape, angle, movement). Discovered by Hubel & Wiesel.",
        example: "Neurons firing only for vertical lines, others for horizontal, specific movement directions.",
        significance: "Show brain breaks down scenes into basic components. Key Figures: Hubel, Wiesel.",
      },
      {
        name: "Parallel Processing (Vision)",
        definition: "Processing many aspects of visual scene simultaneously (color, depth, form, movement) in different brain areas, then integrating.",
        example: "Recognizing person involves parallel processing of face shape, expression, color, movement.",
        significance: "Enables rapid, efficient visual perception.",
      },
    ],
  },
  {
    title: "Topic 3.4: Visual Organization and Interpretation",
    terms: [
      {
        name: "Gestalt",
        definition: "An organized whole. Gestalt psychologists emphasized tendency to integrate pieces into meaningful wholes. \"Whole > sum of parts.\"",
        significance: "School focusing on perceptual organization principles.",
      },
      {
        name: "Figure-Ground",
        definition: "Organization of visual field into objects (figures) standing out from surroundings (ground).",
        example: "Words (figure) on page (ground); vase/faces reversible figure.",
        significance: "Fundamental organization principle; constantly separating.",
      },
      {
        name: "Grouping",
        definition: "The perceptual tendency to organize stimuli into coherent groups based on certain principles (proximity, continuity, closure, similarity, connectedness).",
        significance: "Gestalt principles describing how we automatically organize sensory input.",
        // Subtypes listed below
      },
       {
        name: "Proximity",
        definition: "Grouping nearby figures together.",
        significance: "Gestalt principle of grouping.",
      },
      {
        name: "Continuity",
        definition: "Perceiving smooth, continuous patterns rather than discontinuous ones.",
        significance: "Gestalt principle of grouping.",
      },
      {
        name: "Closure",
        definition: "Filling in gaps to create a complete, whole object.",
        significance: "Gestalt principle of grouping.",
      },
      {
        name: "Similarity",
        definition: "Grouping similar figures together.",
        significance: "Gestalt principle of grouping.",
      },
      {
        name: "Connectedness",
        definition: "Perceiving linked items as a single unit.",
        significance: "Gestalt principle of grouping.",
      },
      {
        name: "Depth Perception",
        definition: "Ability to see objects in 3D despite 2D retinal images; allows judging distance. Partly innate (visual cliff).",
        significance: "Essential for navigation. Relies on binocular/monocular cues.",
      },
      {
        name: "Visual Cliff",
        definition: "Lab device testing depth perception in infants/animals. Infants hesitate to crawl over \"cliff.\" Key Figures: Gibson, Walk.",
        significance: "Provided evidence for innate depth perception component.",
      },
      {
        name: "Binocular Cues",
        definition: "Depth cues, such as retinal disparity and convergence, that depend on the use of two eyes.",
        significance: "Provide strong depth information, especially for closer objects.",
         // Subtypes listed below
      },
      {
        name: "Retinal Disparity",
        definition: "Comparing slightly different images from two eyes computes distance; greater disparity = closer object.",
        example: "Finger \"jumps\" more when close vs. far when alternating eye closure. 3D movies use this.",
        significance: "Primary binocular cue.",
      },
      {
        name: "Convergence",
        definition: "Extent eyes converge inward looking at object; brain notes angle; greater strain = closer object.",
        example: "Eyes turn inward more looking at nose vs. distant building.",
        significance: "Useful cue for close objects.",
      },
      {
        name: "Monocular Cues",
        definition: "Depth cues, such as interposition, relative size, linear perspective, etc., available to either eye alone (also called pictorial cues).",
        significance: "Allow depth perception with one eye; used in 2D art.",
        // Subtypes listed below
      },
      {
        name: "Relative Height",
        definition: "Objects higher in visual field seem farther away.",
        significance: "Monocular depth cue.",
      },
      {
        name: "Relative Size",
        definition: "Assuming similar size, smaller retinal image seems farther away.",
        significance: "Monocular depth cue.",
      },
      {
        name: "Interposition (Overlap)",
        definition: "Object partially blocking another seems closer.",
        significance: "Monocular depth cue.",
      },
      {
        name: "Linear Perspective",
        definition: "Parallel lines appear to converge in distance.",
        significance: "Monocular depth cue.",
      },
      {
        name: "Light and Shadow",
        definition: "Shading creates depth (assuming light from above). Brighter seems closer.",
        significance: "Monocular depth cue.",
      },
      {
        name: "Relative Motion (Motion Parallax)",
        definition: "As we move, closer objects appear to move backward faster; farther objects move with you slower.",
        significance: "Monocular depth cue.",
      },
      {
        name: "Texture Gradient",
        definition: "Closer objects appear coarser/more detailed; farther appear finer.",
        significance: "Monocular depth cue.",
      },
      {
        name: "Phi Phenomenon",
        definition: "Illusion of movement when adjacent lights blink quickly.",
        example: "Marquee lights appearing to move.",
        significance: "Perception constructs motion from static images. Key Figure: Wertheimer.",
      },
      {
        name: "Perceptual Constancy",
        definition: "Perceiving objects as unchanging (having consistent color, brightness, shape, size) even as illumination and retinal images change.",
        significance: "Top-down process allowing stable perception despite varying sensory input.",
        // Subtypes listed below
      },
       {
        name: "Color Constancy",
        definition: "Perceiving familiar objects as having consistent color despite illumination changes.",
        significance: "Perceptual constancy.",
      },
      {
        name: "Brightness (Lightness) Constancy",
        definition: "Perceiving object as having constant brightness despite illumination changes (depends on relative luminance).",
        significance: "Perceptual constancy.",
      },
      {
        name: "Shape Constancy",
        definition: "Perceiving familiar object form as constant despite changing retinal images.",
        significance: "Perceptual constancy.",
      },
      {
        name: "Size Constancy",
        definition: "Perceiving object size as constant despite varying distance/retinal image size (relies on perceived distance).",
        significance: "Perceptual constancy.",
      },
      {
        name: "Perceptual Adaptation",
        definition: "Ability to adjust to changed sensory input (e.g., visually displaced field).",
        example: "Adapting to glasses that shift visual world; initially disorienting, then function normally.",
        significance: "Demonstrates flexibility of perceptual system.",
      },
    ],
  },
  {
    title: "Topic 3.5: Hearing: Sensory and Perceptual Processing",
    terms: [
      {
        name: "Audition",
        definition: "The sense or act of hearing.",
        significance: "Allows communication and detection of environmental sounds.",
      },
      {
        name: "Frequency (Sound)",
        definition: "Number of complete wavelengths passing point per time (Hz). Determines pitch.",
        example: "High frequency = high pitch; low frequency = low pitch.",
        significance: "Physical property determining perceived pitch.",
      },
      {
        name: "Pitch",
        definition: "Tone's experienced highness or lowness; depends on frequency.",
        significance: "Psychological experience of sound frequency.",
      },
      {
        name: "Intensity (Sound) / Amplitude",
        definition: "Amount of energy in sound wave (amplitude/height). Influences loudness (dB).",
        example: "High amplitude = loud; low amplitude = quiet.",
        significance: "Physical property determining perceived loudness.",
      },
      {
        name: "Loudness",
        definition: "Perceived intensity of sound. Determined by amplitude.",
        significance: "Psychological experience of sound intensity.",
      },
      // Ear Structures
      {
        name: "Outer Ear",
        definition: "The outermost part of the ear, consisting of the pinna and the external auditory canal.",
        significance: "Funnels sound waves toward the eardrum.",
         // Subtypes listed below
      },
      {
        name: "Pinna",
        definition: "Visible part of the outer ear; collects and directs sound waves.",
        significance: "Helps localize sound.",
      },
      {
        name: "Auditory Canal",
        definition: "Channel leading from the pinna to the eardrum.",
        significance: "Directs sound waves inward.",
      },
      {
        name: "Middle Ear",
        definition: "Chamber between eardrum and cochlea containing three tiny bones (hammer, anvil, stirrup).",
        significance: "Concentrates and amplifies eardrum vibrations onto the cochlea's oval window.",
         // Subtypes listed below
      },
      {
        name: "Eardrum (Tympanic Membrane)",
        definition: "Tight membrane at the end of the auditory canal that vibrates when struck by sound waves.",
        significance: "Transmits sound vibrations to the middle ear bones.",
      },
      {
        name: "Ossicles (Hammer, Anvil, Stirrup)",
        definition: "The three tiny bones in the middle ear (malleus, incus, stapes) that transmit the eardrum's vibrations to the oval window.",
        significance: "Amplify sound energy.",
      },
      {
        name: "Oval Window",
        definition: "Membrane-covered opening connecting the middle ear (stirrup) to the inner ear (cochlea).",
        significance: "Transmits vibrations into the cochlear fluid.",
      },
      {
        name: "Inner Ear",
        definition: "The innermost part of the ear, containing the cochlea, semicircular canals, and vestibular sacs.",
        significance: "Contains structures for both hearing and balance.",
         // Subtypes listed below
      },
      {
        name: "Cochlea",
        definition: "Coiled, bony, fluid-filled tube in the inner ear; sound waves traveling through the cochlear fluid trigger nerve impulses.",
        significance: "Site of auditory transduction.",
      },
      {
        name: "Basilar Membrane",
        definition: "Membrane running the length of the cochlea, embedded with hair cells.",
        significance: "Vibrates in response to sound; different frequencies affect different places.",
      },
      {
        name: "Hair Cells",
        definition: "Auditory receptor cells lining the basilar membrane; their bending triggers neural impulses in the auditory nerve.",
        significance: "Perform transduction for hearing. Easily damaged by loud noise.",
      },
      {
        name: "Auditory Nerve",
        definition: "Nerve formed by axons of neurons connected to hair cells; carries auditory information from the cochlea to the brain (thalamus -> auditory cortex).",
        significance: "Transmits auditory signals to the brain.",
      },
      // Hearing Theories
      {
        name: "Place Theory",
        definition: "Theory linking pitch with the specific place where the cochlea's basilar membrane is stimulated. High frequencies stimulate near the base; lower frequencies stimulate further up toward the apex.",
        significance: "Best explains how we perceive high pitches. Key Figure: Helmholtz (refined by Bekesy).",
      },
      {
        name: "Frequency Theory (Temporal Theory)",
        definition: "Theory that the rate of nerve impulses traveling up the auditory nerve matches the frequency of a tone, thus enabling us to sense its pitch. The whole basilar membrane vibrates at the sound frequency.",
        significance: "Best explains how we perceive low pitches. Limitation: Neuron firing rate max ~1000 Hz.",
      },
      {
        name: "Volley Principle",
        definition: "Explanation for intermediate pitches (~100-4000 Hz). Neural cells alternate firing in rapid succession (volleys) so their combined frequency matches the sound frequency.",
        significance: "Extends frequency theory to cover pitches above the single-neuron firing limit.",
      },
      {
        name: "Sound Localization",
        definition: "Determining the location of sound sources by comparing signals received by the two ears (differences in timing and intensity).",
        example: "Sound arriving sooner/louder at the right ear indicates the source is to the right.",
        significance: "Allows orientation towards sounds in space.",
      },
      // Hearing Loss
      {
        name: "Hearing Loss",
        definition: "Reduced ability to perceive sound, categorized mainly as sensorineural or conduction.",
        significance: "Affects millions; understanding types aids treatment.",
         // Subtypes listed below
      },
      {
        name: "Sensorineural Hearing Loss (Nerve Deafness)",
        definition: "Caused by damage to the cochlea's receptor cells (hair cells) or to the auditory nerves.",
        example: "Common causes: aging (presbycusis), prolonged exposure to loud noise, disease.",
        significance: "Most common type of permanent hearing loss. Cochlear implants can sometimes help.",
      },
      {
        name: "Conduction Hearing Loss",
        definition: "Caused by damage to the mechanical system that conducts sound waves to the cochlea (e.g., eardrum puncture, middle ear bone damage).",
        significance: "Less common than sensorineural loss. Often treatable medically or surgically, or with conventional hearing aids.",
      },
      {
        name: "Cochlear Implant",
        definition: "Device converting sounds into electrical signals and stimulating the auditory nerve through electrodes threaded into the cochlea.",
        significance: "Can restore functional hearing for people with severe sensorineural hearing loss (deafness due to hair cell damage). Bypasses damaged hair cells.",
      },
    ],
  },
  {
    title: "Topic 3.6: The Other Senses: Touch, Pain, Taste, Smell",
    terms: [
      {
        name: "Touch (Somatosensation)",
        definition: "The sense comprising several distinct sensations: pressure, warmth, cold, and pain. Receptors distributed throughout the skin.",
        significance: "Provides critical information about the immediate environment; essential for development and social interaction.",
      },
      {
        name: "Pain",
        definition: "An unpleasant sensory and emotional experience associated with actual or potential tissue damage. Body's signal that something is wrong.",
        significance: "Protective function, but can become chronic and debilitating. Influenced by biological, psychological, and social-cultural factors.",
      },
      {
        name: "Nociceptors",
        definition: "Sensory receptors located throughout the body that detect hurtful temperatures, pressure, or chemicals.",
        significance: "Initiate the sensation of pain.",
      },
      {
        name: "Gate-Control Theory",
        definition: "Theory that the spinal cord contains a neurological \"gate\" that blocks pain signals or allows them to pass on to the brain. The \"gate\" is opened by the activity of pain signals traveling up small nerve fibers and is closed by activity in larger fibers (carrying touch/pressure signals) or by information coming from the brain (e.g., distraction, endorphins).",
        example: "Rubbing a stubbed toe activates large fibers, closing the gate and reducing pain.",
        significance: "Explains how psychological factors (attention, expectation) and other sensory input can modulate pain perception. Key Figures: Melzack, Wall.",
      },
      {
        name: "Endorphins", // Repeated from Unit 2 for context
        definition: "Natural, opiate-like neurotransmitters linked to pain control and pleasure.",
        significance: "Act as natural painkillers by blocking pain signals (closing the gate).",
      },
      {
        name: "Phantom Limb Sensations",
        definition: "Sensations (often pain, tingling, or movement) perceived in a limb that has been amputated.",
        significance: "Illustrates brain plasticity and how the brain can misinterpret spontaneous CNS activity in the absence of normal sensory input.",
      },
      {
        name: "Taste (Gustation)",
        definition: "The chemical sense detecting molecules dissolved in saliva. Receptors are taste buds primarily on the tongue.",
        significance: "Guides food selection (detecting nutrients and toxins). Interacts strongly with smell.",
         // Includes 5 basic tastes
      },
      {
        name: "Basic Tastes",
        definition: "The five primary taste sensations: Sweet, Salty, Sour, Bitter, and Umami (savory/meaty).",
        significance: "Each may have survival functions (e.g., sweet=energy, bitter=poison). Combinations create complex flavors.",
      },
      {
        name: "Smell (Olfaction)",
        definition: "The chemical sense detecting airborne molecules. Receptors are olfactory receptor cells in the upper nasal cavity.",
        significance: "Only sense that does not route through the thalamus before reaching the cortex. Strong links to memory and emotion (via limbic system).",
      },
      {
        name: "Olfactory Bulb",
        definition: "Brain structure located above the nasal cavity beneath the frontal lobes; receives input from olfactory receptors and is the first processing site for smell.",
        significance: "Direct pathway from olfactory receptors; close connection to limbic system structures.",
      },
      {
        name: "Sensory Interaction",
        definition: "The principle that one sense may influence another.",
        example: "The smell of food influences its taste (flavor). Vision influences balance (feeling dizzy watching a roller coaster video). The McGurk effect (seeing mouth movements influences perceived sound).",
        significance: "Demonstrates that our senses do not work in isolation; perception is often multimodal.",
      },
    ],
  },
  {
    title: "Topic 3.7: Body Senses: Kinesthesia and Vestibular Sense",
    terms: [
      {
        name: "Kinesthesia (Proprioception)",
        definition: "Our movement sense—the system for sensing the position and movement of individual body parts. Relies on receptors in joints, tendons, and muscles.",
        example: "Being able to touch your nose with your eyes closed; coordinating movements like walking or typing.",
        significance: "Essential for coordinated action, motor control, and body awareness.",
      },
      {
        name: "Vestibular Sense",
        definition: "The sense of body movement and position, including the sense of balance. Relies on receptors in the inner ear (semicircular canals and vestibular sacs).",
        significance: "Crucial for maintaining balance, posture, stabilizing vision during head movements.",
      },
      {
        name: "Semicircular Canals",
        definition: "Three fluid-filled bony channels in the inner ear, arranged in different planes; detect rotational acceleration of the head.",
        significance: "Primary structures for sensing head rotation (e.g., nodding, shaking head, tilting).",
      },
      {
        name: "Vestibular Sacs (Utricle and Saccule)",
        definition: "Two sacs in the inner ear containing fluid and calcium crystals (otoliths) that move hair-like receptors to detect linear acceleration and gravity (head position).",
        significance: "Primary structures for sensing forward/backward movement, up/down movement, and head tilt.",
      },
    ],
  },
]
// Sample data for Unit 4 (Placeholders remain)
const unit4Topics = [
  {
    title: "Unit Overview", // Added Unit Overview as a pseudo-topic for context
    terms: [
      {
        name: "Unit 4 Overview",
        definition: "This unit explores the process of learning, defined as a relatively permanent change in behavior or knowledge due to experience. It covers the principles of classical conditioning, operant conditioning, and observational learning, as well as cognitive and biological factors that influence learning.",
        example: "", // No specific example for the overview itself
        significance: "Provides the foundational framework for understanding how humans and animals acquire new behaviors and information.",
      }
    ]
  },
  {
    title: "Topic 4.1: Introduction to Learning",
    terms: [
      {
        name: "Learning",
        definition: "The process of acquiring through experience new and relatively enduring information or behaviors.",
        example:
          "Learning to ride a bike, associating lightning with thunder, learning algebra, learning to fear spiders after being bitten.",
        significance: "Allows adaptation to changing environments; fundamental psychological process.",
      },
      {
        name: "Associative Learning",
        definition: "Learning that certain events occur together. May be two stimuli (classical conditioning) or response and consequence (operant conditioning).",
        example: "Dog learns bell predicts food. Dog learns sitting gets treat.",
        significance: "Basic form enabling prediction and control.",
      },
      {
        name: "Habituation",
        definition: "Decreasing responsiveness with repeated exposure to a stimulus. Simple learning.",
        example: "Getting used to traffic noise; sea slug stops withdrawing gill after repeated harmless squirts.",
        significance: "Allows ignoring unimportant, constant stimuli. Different from sensory adaptation.",
      },
    ],
  },
  {
    title: "Topic 4.2: Classical Conditioning",
    terms: [
      {
        name: "Classical Conditioning (Pavlovian or Respondent Conditioning)",
        definition: "Learning where one links two+ stimuli and anticipates events. Neutral stimulus associated with stimulus that naturally produces behavior, eventually elicits behavior alone. Involves respondent (automatic) behavior.",
        example: "Pavlov's dogs salivating to bell paired with food. Child fearing doctor after needle pain.",
        significance: "Explains learning of many automatic responses (emotions, physiological). Key Figure: Ivan Pavlov.",
      },
      {
        name: "Stimulus",
        definition: "Any event or situation that evokes a response.",
        example: "", // Example implicitly covered in other terms
        significance: "The trigger for a response in learning paradigms.",
      },
      {
        name: "Response",
        definition: "Behavior occurring as result of stimulus.",
        example: "", // Example implicitly covered in other terms
        significance: "The reaction elicited by a stimulus in learning paradigms.",
      },
      {
        name: "Neutral Stimulus (NS)",
        definition: "Stimulus eliciting no response before conditioning.",
        example: "Bell before paired with food. Doctor before needle.",
        significance: "Becomes conditioned stimulus after pairing.",
      },
      {
        name: "Unconditioned Stimulus (US or UCS)",
        definition: "Stimulus unconditionally—naturally and automatically—triggers unconditioned response (UR).",
        example: "Food. Painful needle.",
        significance: "Stimulus naturally eliciting response.",
      },
      {
        name: "Unconditioned Response (UR or UCR)",
        definition: "Unlearned, naturally occurring response to unconditioned stimulus (US).",
        example: "Salivation to food. Crying/fear to pain.",
        significance: "Natural, reflexive reaction.",
      },
      {
        name: "Conditioned Stimulus (CS)",
        definition: "Originally neutral stimulus that, after association with US, triggers conditioned response (CR).",
        example: "Bell after paired with food. Doctor's coat after needle.",
        significance: "Learned trigger.",
      },
      {
        name: "Conditioned Response (CR)",
        definition: "Learned response to previously neutral (now conditioned) stimulus (CS). Usually similar to UR.",
        example: "Salivation to bell. Fear/crying to doctor's coat.",
        significance: "Learned reaction.",
      },
      {
        name: "Acquisition (Classical Conditioning)",
        definition: "Initial stage; linking NS and US so NS begins triggering CR. Timing important (NS usually precedes US ~0.5 sec).",
        example: "Period dogs learned bell-food association.",
        significance: "Process of forming learned association.",
      },
      {
        name: "Higher-Order Conditioning (Second-Order Conditioning)",
        definition: "Procedure where CS in one experience is paired with new NS, creating second (often weaker) CS.",
        example: "Dog salivates to bell (CS1). Pair light (NS) with bell (CS1). Light (CS2) may eventually elicit salivation alone.",
        significance: "Shows associations can build on existing ones.",
      },
      {
        name: "Extinction (Classical Conditioning)",
        definition: "Diminishing of CR; occurs when US does not follow CS.",
        example: "Ringing bell without food leads to less salivation.",
        significance: "Learned associations can weaken/disappear if pairing stops. Suppresses, doesn't eliminate, CR.",
      },
      {
        name: "Spontaneous Recovery",
        definition: "Reappearance, after pause, of extinguished CR.",
        example: "After extinction/rest, dog might salivate weakly to bell again.",
        significance: "Shows extinction doesn't erase association completely.",
      },
      {
        name: "Generalization (Classical Conditioning)",
        definition: "Tendency, once response conditioned, for stimuli similar to CS to elicit similar responses.",
        example: "Dog salivates to slightly different bell tone. Little Albert fearing white rabbits after fearing white rat.",
        significance: "Learned responses spread to related stimuli. Adaptive.",
      },
      {
        name: "Discrimination (Classical Conditioning)",
        definition: "Learned ability to distinguish between CS and similar stimuli that do not signal US.",
        example: "Dog learns to salivate only to specific tone signaling food. Child fears specific dog that bit them, not others.",
        significance: "Allows appropriate response to specific predictive stimuli. Adaptive.",
      },
      {
        name: "John B. Watson",
        definition: "Founder of behaviorism; conducted 'Little Albert' experiment demonstrating classical conditioning of fear.",
        example: "Associated with the 'Little Albert' study.",
        significance: "Pioneered behaviorist approach, showed emotions could be classically conditioned.",
      },
      {
        name: '"Little Albert" Experiment',
        definition: "Watson & Rayner study demonstrating classical conditioning of fear. Infant conditioned to fear white rat (CS) by pairing with loud noise (US). Fear generalized.",
        example: "Conditioning an infant to fear a white rat.",
        significance: "Showed emotions like fear could be learned via conditioning. Raised ethical concerns.",
      },
    ],
  },
  {
    title: "Topic 4.3: Operant Conditioning",
    terms: [
       {
        name: "Operant Conditioning",
        definition: "Learning where behavior strengthened if followed by reinforcer or diminished if followed by punisher. Associating own actions (operant behaviors) with consequences. Involves operant (voluntary) behavior.",
        example: "Rat learns lever pressing gets food. Child learns saying 'please' gets cookie. Studying gets good grades.",
        significance: "Explains learning/maintenance of voluntary behaviors based on outcomes. Foundational to behavior modification. Key Figures: B.F. Skinner, Edward L. Thorndike.",
      },
      {
        name: "Operant Behavior",
        definition: "Behavior operating on environment, producing consequences. Voluntary. Contrasts with respondent behavior (classical conditioning).",
        example: "Pressing a lever, saying 'please', studying.",
        significance: "The type of behavior modified in operant conditioning.",
      },
      {
        name: "Law of Effect",
        definition: "Thorndike's principle: Behaviors followed by favorable consequences become more likely; behaviors followed by unfavorable consequences become less likely.",
        example: "Thorndike's cats escaped puzzle boxes faster because escaping (favorable) strengthened escape behaviors.",
        significance: "Foundational principle for operant conditioning. Key Figure: Edward L. Thorndike.",
      },
      {
        name: "Operant Chamber (Skinner Box)",
        definition: "Chamber with bar/key animal manipulates for reinforcer (food/water); records response rate. Allowed precise study.",
        example: "A box where a rat presses a lever to receive food pellets.",
        significance: "Standardized apparatus for studying operant learning systematically. Key Figure: B.F. Skinner.",
      },
      {
        name: "Reinforcement",
        definition: "Any event/stimulus *strengthening* behavior it follows (increases likelihood).",
        example: "Food pellet for lever press, praise for good work.",
        significance: "Core principle for increasing desired behaviors.",
      },
       {
        name: "Shaping",
        definition: "Operant procedure using reinforcers to guide behavior toward closer approximations of desired behavior (successive approximations).",
        example: "Training dog to roll over by reinforcing steps (lying down -> rolling slightly -> full roll).",
        significance: "Allows learning complex behaviors gradually.",
      },
      {
        name: "Discriminative Stimulus",
        definition: "Stimulus signaling response will be reinforced/punished. Sets occasion for response.",
        example: "Green light signals driving through intersection reinforced. Pigeon pecks key for food only when light is on (if only reinforced then).",
        significance: "Helps learn *when* behavior leads to consequence.",
      },
      {
        name: "Positive Reinforcement",
        definition: "Increasing behaviors by presenting pleasurable/desirable stimulus after response. Adding something good.",
        example: "Giving treat for sitting. Praising child for cleaning room. Getting paid.",
        significance: "Common method for strengthening behavior.",
      },
      {
        name: "Negative Reinforcement",
        definition: "Increasing behaviors by stopping/reducing aversive stimulus after response. Subtracting something bad. *Not punishment.*",
        example: "Taking painkillers ends pain (reinforces pill-taking). Fastening seatbelt stops beeping (reinforces buckling). Studying avoids bad grade (reinforces studying).",
        significance: "Strengthens behaviors allowing escape/avoidance of unpleasant situations.",
      },
      {
        name: "Primary Reinforcer",
        definition: "Innately reinforcing stimulus satisfying biological need. Unlearned.",
        example: "Food, water, pain relief, pleasant touch.",
        significance: "Naturally rewarding.",
      },
      {
        name: "Conditioned Reinforcer (Secondary Reinforcer)",
        definition: "Stimulus gaining reinforcing power through association with primary reinforcer. Learned.",
        example: "Money, grades, praise, tokens.",
        significance: "Influences most human behaviors.",
      },
      {
        name: "Reinforcement Schedule",
        definition: "Pattern defining how often desired response reinforced.",
        example: "Continuous, Fixed-Ratio, Variable-Ratio, Fixed-Interval, Variable-Interval.",
        significance: "Affects acquisition speed, extinction resistance.",
      },
      {
        name: "Continuous Reinforcement",
        definition: "Reinforcing desired response every time.",
        example: "Treat every time dog sits. Vending machine delivers snack every time.",
        significance: "Rapid learning, rapid extinction. Best for initial teaching.",
      },
      {
        name: "Partial (Intermittent) Reinforcement",
        definition: "Reinforcing response only part time.",
        example: "Slot machines, checking email.",
        significance: "More realistic; makes behaviors persistent. Slower acquisition, greater extinction resistance.",
      },
       {
        name: "Fixed-Ratio (FR) Schedule",
        definition: "Reinforces after specified *number* of responses. High response rate, pause after reinforcement.",
        example: "Free coffee after 10 purchases. Being paid for every 5 widgets made.",
        significance: "Produces high rates of responding but often a pause after reinforcement.",
      },
      {
        name: "Variable-Ratio (VR) Schedule",
        definition: "Reinforces after unpredictable *number* of responses. Very high, steady response rate. Highly extinction resistant.",
        example: "Slot machines, fishing, sales commissions.",
        significance: "Produces very high, steady rates of responding; very resistant to extinction.",
      },
      {
        name: "Fixed-Interval (FI) Schedule",
        definition: "Reinforces after specified *time* elapsed. Choppy responding, increases near time for reinforcement (scalloped).",
        example: "Checking mail near delivery time. Waiting for cookies to bake.",
        significance: "Produces a pattern of accelerating responses toward the end of each interval.",
      },
      {
        name: "Variable-Interval (VI) Schedule",
        definition: "Reinforces at unpredictable *time* intervals. Slow, steady responding. Extinction resistant.",
        example: "Checking email notifications, pop quizzes.",
        significance: "Produces slow, steady responding; resistant to extinction.",
      },
      {
        name: "Punishment",
        definition: "Event/consequence *decreasing* behavior it follows. Opposite of reinforcement.",
        example: "Scolding, taking away privileges.",
        significance: "Used to reduce unwanted behaviors; potential drawbacks.",
      },
      {
        name: "Positive Punishment",
        definition: "Decreasing behavior by presenting/administering aversive stimulus following behavior. Adding something bad.",
        example: "Spraying cat for scratching furniture. Speeding ticket. Scolding child.",
        significance: "Aims to reduce behavior by adding unpleasant consequence.",
      },
      {
        name: "Negative Punishment (Omission Training / Penalty)",
        definition: "Decreasing behavior by withdrawing/removing desirable stimulus following behavior. Subtracting something good.",
        example: "Taking away teen's driving privileges. Child time-out. Docking pay.",
        significance: "Aims to reduce behavior by removing pleasant consequence.",
      },
      {
          name: "Drawbacks of Punishment",
          definition: "Potential negative consequences and limitations associated with using punishment to decrease behavior.",
          example: "A child who is spanked may become fearful or aggressive.",
          significance: "Punishment is often less effective than reinforcement. It can lead to: suppressed, not forgotten behavior; teaching discrimination (only avoiding behavior when punisher present); teaching fear (associating fear with punisher/context); increasing aggression (modeling); not guiding toward desired behavior.",
      }
    ],
  },
   {
    title: "Topic 4.4: Social and Cognitive Factors in Learning",
    terms: [
      {
        name: "Biological Constraints on Conditioning",
        definition: "Inherent biological predispositions that limit or facilitate the types of associations an organism can learn.",
        example: "It's easier to condition a fear of snakes than flowers.",
        significance: "Shows learning isn't solely determined by environment; biology plays a crucial role. Preparedness, taste aversion, instinctive drift are examples.",
      },
      {
        name: "Preparedness",
        definition: "Biological predisposition to learn associations with survival value.",
        example: "Easier to condition fear of snakes than flowers. Rats easily link taste-sickness, not sight-sickness.",
        significance: "Shows associations not learned equally; evolution influences learning. Facilitates learning adaptive associations.",
      },
      {
        name: "Taste Aversion (Garcia Effect)",
        definition: "Strong aversion to food after getting sick from it, even if hours later/one pairing. Violates traditional classical conditioning rules (immediate CS-US pairing/multiple trials needed).",
        example: "Avoiding tequila after one bad experience. Chemo patient food aversions.",
        significance: "Demonstrates biological preparedness in classical conditioning; survival value (avoiding poisonous foods). Key Figure: John Garcia.",
      },
      {
        name: "Instinctive Drift",
        definition: "Tendency of learned behavior to gradually revert to biological predisposed patterns (instincts) despite reinforcement.",
        example: "Pigs trained to put coins in bank start rooting them instead. Raccoons trained to deposit coins start 'washing' them.",
        significance: "Shows operant conditioning constrained by innate tendencies; biology can override reinforcement. Key Figures: Keller and Marian Breland.",
      },
       {
        name: "Cognitive Map",
        definition: "Mental representation of the layout of one's environment.",
        example: "Rats learn maze layout without reward, use shortcuts later when reward is introduced. Navigating your house in the dark.",
        significance: "Evidence cognitive processes (internal representations) involved in learning, even without immediate reinforcement (supports latent learning). Key Figure: Edward Tolman.",
      },
      {
        name: "Latent Learning",
        definition: "Learning occurring but not apparent until there is an incentive to demonstrate it.",
        example: "Rats explore a maze without reward, demonstrate learning speed increase when reward introduced later. Children learn behaviors by observation, demonstrate later when needed.",
        significance: "Shows learning can occur without reinforcement (cognition involved); challenges strict behaviorist views. Key Figure: Edward Tolman.",
      },
      {
        name: "Insight Learning",
        definition: "Sudden realization of a problem's solution ('Aha!' moment). Contrasts with gradual trial-and-error learning.",
        example: "Köhler's chimp Sultan fitting two sticks together to reach a banana outside his cage.",
        significance: "Suggests cognitive processes (restructuring the problem mentally) rather than just stimulus-response learning. Key Figure: Wolfgang Köhler.",
      },
      {
        name: "Intrinsic Motivation",
        definition: "Desire to perform a behavior effectively for its own sake (enjoyment, interest, challenge).",
        example: "Reading a book for pleasure. Playing a sport for the fun of it. Solving puzzles for satisfaction.",
        significance: "Often leads to higher quality learning/performance and greater persistence. Can be undermined by extrinsic rewards (Overjustification Effect).",
      },
      {
        name: "Extrinsic Motivation",
        definition: "Desire to perform a behavior to receive promised rewards or avoid threatened punishment.",
        example: "Studying hard to get good grades. Working primarily for money. Cleaning room to avoid being grounded.",
        significance: "Can effectively motivate behavior, but may reduce enjoyment/persistence once rewards/threats removed. May undermine intrinsic motivation.",
      },
      {
        name: "Overjustification Effect",
        definition: "The effect of promising a reward for doing what one already likes to do. The reward may lessen and replace the person's original, intrinsic motivation.",
        example: "Paying children to play with markers they already enjoy may reduce their later unpaid play with those markers.",
        significance: "Shows how extrinsic rewards can decrease internal motivation and enjoyment of an activity.",
      },
      {
        name: "Learned Helplessness",
        definition: "The hopelessness and passive resignation an animal or human learns when unable to avoid repeated aversive events.",
        example: "Dogs exposed to unavoidable electric shocks later don't even try to escape when escape becomes possible. People facing uncontrollable negative life events may give up trying to improve their situation.",
        significance: "Has implications for understanding depression, stress responses, and the importance of perceived control. Key Figure: Martin Seligman.",
      },
       {
        name: "Locus of Control",
        definition: "A person's general belief about the extent to which they control the events in their life.",
        example: "Believing grades are due to effort vs. believing they are due to luck or unfair teachers.",
        significance: "Introduces the concepts of internal and external locus of control, which impact motivation, achievement, and health. Key Figure: Julian Rotter.",
      },
      {
        name: "Internal Locus of Control",
        definition: "The perception that you control your own fate.",
        example: "Believing that hard work leads to success.",
        significance: "Associated with higher achievement, better health, less depression, and better coping with stress.",
      },
      {
        name: "External Locus of Control",
        definition: "The perception that chance or outside forces beyond your personal control determine your fate.",
        example: "Believing that success is a matter of luck or being in the right place at the right time.",
        significance: "Associated with lower achievement, higher rates of depression, and learned helplessness.",
      },
      {
        name: "Self-Control",
        definition: "The ability to control impulses and delay short-term gratification for greater long-term rewards.",
        example: "Choosing to study for an exam instead of going to a party. Saving money instead of spending it immediately. Sticking to a diet.",
        significance: "Predicts better academic success, social success, and overall well-being. It requires effort and can be depleted but also strengthened like a muscle. Related to Walter Mischel's Marshmallow Test.",
      },
    ],
   },
   {
    title: "Topic 4.5: Observational Learning",
    terms: [
      {
        name: "Observational Learning (Social Learning)",
        definition: "Learning by observing others (models). Learning without direct experience, by watching and imitating.",
        example: "Child learns how to tie their shoes by watching a parent. Learning a new dance move by watching a video. Learning aggressive behaviors from media.",
        significance: "A major way humans and some animals learn complex social behaviors, skills, attitudes, and norms. Key Figure: Albert Bandura.",
      },
      {
        name: "Modeling",
        definition: "The process of observing and imitating a specific behavior.",
        example: "An apprentice learning a craft by watching a master artisan. A child imitating a parent's way of speaking.",
        significance: "Core mechanism of observational learning; allows for transmission of behavior.",
      },
      {
        name: "Mirror Neurons",
        definition: "Frontal lobe neurons that some scientists believe fire when performing certain actions or when observing another doing so. May enable imitation and empathy.",
        example: "Neurons that fire both when a monkey grasps an object and when it observes another monkey or human grasping an object.",
        significance: "Potential neural basis for imitation, empathy, theory of mind, and observational learning. (Research is ongoing and debated).",
      },
       {
        name: "Albert Bandura",
        definition: "Leading researcher in observational learning (social learning theory). Known for the Bobo doll experiments and concepts like reciprocal determinism and self-efficacy.",
        example: "Conducted the Bobo doll experiments.",
        significance: "Demonstrated the power of observational learning, particularly for aggression, challenging purely behaviorist views. Emphasized cognitive factors in learning.",
      },
      {
        name: "Bobo Doll Experiment",
        definition: "Bandura's classic experiments where preschool children watched a model aggressively beat up an inflatable Bobo doll. Children who observed the aggressive model were significantly more likely to imitate the aggression later when playing with the doll.",
        example: "Children hitting and yelling at a Bobo doll after seeing an adult do the same.",
        significance: "Provided strong evidence that aggression can be learned through observation and imitation. Highlighted the impact of modeling on behavior.",
      },
      {
        name: "Vicarious Reinforcement",
        definition: "Observing a model being reinforced for a behavior increases the likelihood that an observer will imitate that behavior.",
        example: "Seeing a sibling get praised for cleaning their room makes a child more likely to clean their own.",
        significance: "Shows that direct reinforcement isn't necessary for learning; observed consequences matter.",
      },
      {
        name: "Vicarious Punishment",
        definition: "Observing a model being punished for a behavior decreases the likelihood that an observer will imitate that behavior.",
        example: "Seeing a classmate get detention for cheating makes another student less likely to cheat.",
        significance: "Shows that direct punishment isn't necessary for learning; observed consequences matter.",
      },
      {
        name: "Prosocial Behavior",
        definition: "Positive, constructive, helpful behavior. The opposite of antisocial behavior.",
        example: "Sharing, helping, cooperation, comforting others.",
        significance: "Observational learning can effectively promote prosocial behavior (e.g., learning helpfulness or non-violence from positive models).",
      },
      {
        name: "Antisocial Behavior",
        definition: "Negative, destructive, unhelpful behavior.",
        example: "Aggression, bullying, lying, cheating.",
        significance: "Observational learning can contribute to the learning and spread of antisocial behavior (e.g., learning aggression from media violence or aggressive models).",
      },
    ],
   },
]
const unit5Topics = [
  // Unit Overview conceptually belongs here but doesn't fit the topic/term structure:
  // Unit 5: Cognitive Psychology
  // Overview: This unit explores higher-level mental processes, including memory (encoding, storage, retrieval),
  // forgetting, thinking, problem-solving, decision-making, judgment, language development, and intelligence.
  {
    title: "Topic 5.1: Introduction to Memory",
    terms: [
      {
        name: "Memory",
        definition: "Persistence of learning over time through encoding, storage, retrieval of information.",
        example: "Remembering your first day of school, recalling how to ride a bike, recognizing a friend's face.",
        significance: "Fundamental cognitive process that shapes our identity and enables learning.",
      },
      {
        name: "Encoding",
        definition: "Processing information into the memory system (e.g., by extracting meaning).",
        example: "Extracting the meaning of a definition while studying.",
      },
      {
        name: "Storage",
        definition: "Process of retaining encoded information over time.",
        example: "Keeping the learned information in your brain until the test day.",
      },
      {
        name: "Retrieval",
        definition: "Process of getting information out of memory storage.",
        example: "Recalling the definition of a term during the test.",
      },
      {
        name: "Parallel Processing (Memory context)",
        definition: "Processing many aspects of a problem simultaneously; the brain's natural mode of information processing for many functions, including memory.",
        example: "When you see a bird, your brain processes its color, shape, movement, and sound all at once.",
      },
      {
        name: "Information-Processing Model (Atkinson-Shiffrin Model)",
        definition: "Views memory as similar to computer processing in three stages: sensory memory, short-term memory, and long-term memory.",
        significance: "A foundational three-stage model comparing human memory to computer operations.",
      },
      {
        name: "Sensory Memory",
        definition: "The immediate, very brief recording of sensory information in the memory system.",
        example: "Fleeting visual image (iconic) or sound echo (echoic) after the stimulus is gone.",
      },
      {
        name: "Short-Term Memory (STM)",
        definition: "Activated memory that holds a few items briefly, such as a phone number while dialing, before the information is stored or forgotten.",
        significance: "Limited capacity (about 7 items) and duration (seconds) without rehearsal.",
        example: "Remembering a 7-digit phone number just long enough to dial it."
      },
      {
        name: "Long-Term Memory (LTM)",
        definition: "The relatively permanent and limitless storehouse of the memory system. Includes knowledge, skills, and experiences.",
        example: "Your memory of your own name, historical facts, how to ride a bike."
      },
      {
        name: "Working Memory (Baddeley's Model)",
        definition: "A newer understanding of short-term memory that focuses on conscious, active processing of incoming auditory and visual-spatial information, and of information retrieved from long-term memory. Includes multiple components.",
        significance: "Emphasizes the active manipulation of information, unlike the passive storage view of STM.",
      },
      {
        name: "Central Executive",
        definition: "Component of Baddeley's working memory model that manages attention, integrates information from the phonological loop, visuospatial sketchpad, and episodic buffer, and links to long-term memory.",
        example: "Directing your attention between listening to a lecture and taking notes.",
      },
      {
        name: "Phonological Loop",
        definition: "Component of Baddeley's working memory model that holds and manipulates auditory information.",
        example: "Mentally rehearsing a phone number to keep it in memory.",
      },
      {
        name: "Visuospatial Sketchpad",
        definition: "Component of Baddeley's working memory model that holds and manipulates visual and spatial information.",
        example: "Mentally picturing the layout of your house.",
      },
      {
        name: "Episodic Buffer",
        definition: "Component added later to Baddeley's working memory model; integrates information across domains (visual, spatial, verbal) and links working memory to long-term memory, managing the sequencing of events.",
        example: "Combining sights, sounds, and story elements when recalling a scene from a movie.",
      },
    ],
  },
  {
    title: "Topic 5.2: Encoding",
    terms: [
      {
        name: "Explicit Memory (Declarative Memory)",
        definition: "Memory of facts and experiences that one can consciously know and \"declare.\" Encoded through effortful processing.",
        example: "Recalling your last vacation (episodic), knowing the capital of France (semantic)."
      },
      {
        name: "Effortful Processing",
        definition: "Encoding that requires attention and conscious effort.",
        example: "Studying textbook definitions, memorizing a historical timeline.",
      },
      {
        name: "Semantic Memory",
        definition: "Explicit memory of facts and general knowledge.",
        example: "Knowing that grass is green, understanding vocabulary words.",
      },
      {
        name: "Episodic Memory",
        definition: "Explicit memory of personally experienced events.",
        example: "Remembering your birthday party last year, recalling your first kiss.",
      },
      {
        name: "Implicit Memory (Nondeclarative Memory)",
        definition: "Retention of learned skills or classically conditioned associations independent of conscious recollection. Encoded through automatic processing.",
        example: "Riding a bike (procedural), feeling tense in a dentist's waiting room (classical conditioning).",
      },
      {
        name: "Automatic Processing",
        definition: "Unconscious encoding of incidental information, such as space, time, and frequency, and of well-learned information, such as word meanings.",
        example: "Remembering where on the page a diagram appeared, knowing the sequence of your day's events without trying.",
      },
      {
        name: "Procedural Memory",
        definition: "Implicit memory for automatic skills (e.g., riding a bike).",
        example: "Typing on a keyboard, playing a musical instrument.",
      },
      {
        name: "Classical Conditioning Associations",
        definition: "Implicit memory formed through automatic associations between stimuli (e.g., an automatic fear response to a previously neutral sound).",
        example: "A dog learning to salivate at the sound of a bell that predicts food."
      },
      {
        name: "Space, Time, Frequency",
        definition: "Types of information automatically processed without conscious effort.",
        example: "Recalling the location of a term on a textbook page (space), retracing your steps during the day (time), noticing how many times you saw a friend today (frequency)."
      },
      // Note: "Sensory Memory Types" is a heading, not a term. Iconic and Echoic are the specific types.
      {
        name: "Iconic Memory",
        definition: "A fleeting sensory memory of visual stimuli; a photographic or picture-image memory lasting no more than a few tenths of a second.",
        significance: "Demonstrated by Sperling's experiments where participants could recall letters briefly flashed.",
        example: "Briefly seeing the image of a lightning flash after it disappears."
      },
      {
        name: "Echoic Memory",
        definition: "A fleeting sensory memory of auditory stimuli; if attention is elsewhere, sounds and words can still be recalled within 3 or 4 seconds.",
        example: "Being able to recall the last few words someone said, even if you were momentarily distracted.",
      },
      {
        name: "Short-Term Memory Capacity",
        definition: "Typically holds about 7 items (+/- 2) briefly (George Miller's 'Magical Number Seven'). Working memory capacity is now understood to be more variable and limited, especially under load.",
        significance: "Highlights the limited nature of conscious processing.",
      },
      // Note: "Effortful Processing Strategies" is a heading.
      {
        name: "Chunking",
        definition: "Organizing items into familiar, manageable units; often occurs automatically.",
        example: "Remembering a phone number as XXX-XXX-XXXX instead of ten individual digits.",
      },
      {
        name: "Mnemonics",
        definition: "Memory aids, especially those techniques that use vivid imagery and organizational devices.",
        example: "Using acronyms (like HOMES for the Great Lakes), the method of loci, or the peg-word system.",
      },
      {
        name: "Hierarchies",
        definition: "Organizing information into a few broad concepts that are divided and subdivided into narrower concepts and facts.",
        example: "Creating an outline for an essay or textbook chapter.",
      },
      {
        name: "Distributed Practice (Spacing Effect)",
        definition: "The tendency for distributed study or practice to yield better long-term retention than is achieved through massed study or practice (cramming).",
        example: "Studying psychology for 1 hour each day for 5 days is more effective than studying for 5 hours straight.",
      },
      {
        name: "Testing Effect (Retrieval Practice)",
        definition: "Enhanced memory after retrieving, rather than simply rereading, information.",
        example: "Actively quizzing yourself on material leads to better recall than passively rereading notes.",
      },
      {
        name: "Levels of Processing Theory (Craik & Lockhart)",
        definition: "Proposes that deeper levels of processing (e.g., semantic, based on meaning) lead to better encoding and retention than shallow levels (e.g., structural, based on appearance, or phonemic, based on sound).",
        significance: "Highlights the importance of meaning for memory.",
      },
      {
        name: "Shallow Processing",
        definition: "Encoding on a basic level based on the structure (appearance) or phonemic (sound) level of words.",
        example: "Noting if a word is capitalized, counting the letters, or checking if it rhymes with another word.",
      },
      {
        name: "Deep Processing",
        definition: "Encoding semantically, based on the meaning of the words; tends to yield the best retention.",
        example: "Thinking about the definition of a word and using it in a sentence.",
      },
      {
        name: "Self-Reference Effect",
        definition: "The tendency for individuals to have better recall for information that relates meaningfully to oneself.",
        example: "Remembering the definition of 'extraversion' better if you think about how it applies to your own personality.",
      },
    ],
  },
    {
    title: "Topic 5.3: Storing",
    terms: [
      {
        name: "Long-Term Memory Capacity",
        definition: "Essentially limitless; our capacity for storing long-term memories is vast and not easily filled.",
        significance: "Contrasts sharply with the limited capacity of sensory and short-term/working memory."
      },
      {
        name: "Memory Consolidation",
        definition: "The neural storage of a long-term memory. Sleep plays an important role in this process, and the hippocampus is involved.",
        significance: "The process by which recent memories are crystallized into stable long-term memories."
      },
      // Note: "Brain Structures in Memory" is a heading.
      {
        name: "Hippocampus",
        definition: "A neural center located in the limbic system; helps process explicit (declarative) memories for storage and consolidation.",
        significance: "Crucial for forming new episodic and semantic memories; damage leads to anterograde amnesia."
      },
      {
        name: "Frontal Lobes",
        definition: "Brain regions involved in working memory processing (holding information in mind) and the retrieval of explicit memories.",
        example: "Recalling a past event involves activity in the frontal lobes.",
        significance: "Important for directing attention and retrieving specific memories."
      },
      {
        name: "Cerebellum",
        definition: "Plays a key role in forming and storing implicit memories created by classical conditioning and procedural skills.",
        example: "Learning conditioned responses (like blinking to a tone associated with an air puff), acquiring motor skills.",
        significance: "Essential for implicit motor learning and conditioned reflexes."
      },
      {
        name: "Basal Ganglia",
        definition: "Deep brain structures involved in motor movement; facilitate the formation of procedural memories for skills and habits.",
        example: "Learning to ride a bike or type involves the basal ganglia.",
        significance: "Crucial for habit formation and skill learning."
      },
      {
        name: "Amygdala",
        definition: "Two lima-bean-sized neural clusters in the limbic system; linked to emotion. Boosts activity and proteins in the brain's memory-forming areas during emotional events, helping form stronger, emotionally-tinged memories (like flashbulb memories).",
        significance: "Modulates memory consolidation based on emotional significance."
      },
      {
        name: "Long-Term Potentiation (LTP)",
        definition: "An increase in a cell's firing potential after brief, rapid stimulation. Believed to be a neural basis for learning and memory. Involves neurotransmitters like glutamate.",
        significance: "A persistent strengthening of synapses considered a key cellular mechanism underlying memory."
      },
      {
        name: "Flashbulb Memory",
        definition: "A clear, sustained memory of an emotionally significant moment or event. While vivid, these memories can sometimes be inaccurate.",
        example: "Remembering exactly where you were and what you were doing when learning about the 9/11 attacks.",
      },
    ],
  },
  {
    title: "Topic 5.4: Retrieving",
    terms: [
      {
        name: "Retrieval Cues",
        definition: "Reminders of information (like words, events, emotions, or contexts) that we can use to access information stored in memory.",
        example: "Seeing a picture from a vacation can help you recall details from the trip.",
      },
      {
        name: "Priming",
        definition: "The activation, often unconsciously, of particular associations in memory.",
        example: "Hearing the word 'rabbit' might make you slightly faster to recognize the word 'hare' shortly after.",
      },
      {
        name: "Context-Dependent Memory",
        definition: "The improved recall of specific information when the context (environment) present at encoding and retrieval are the same.",
        example: "Scuba divers recalled words learned underwater better when tested underwater than when tested on land.",
      },
      {
        name: "State-Dependent Memory",
        definition: "What we learn in one physiological or psychological state (e.g., drunk, sober, depressed, happy) may be more easily recalled when we are again in that state.",
        example: "If you hide money while drunk, you might recall the location better when drunk again.",
      },
      {
        name: "Mood-Congruent Memory",
        definition: "The tendency to recall experiences that are consistent with one's current good or bad mood.",
        example: "When feeling sad, it's easier to recall other sad events.",
      },
      {
        name: "Serial Position Effect",
        definition: "Our tendency to best recall the last (recency effect) and first (primacy effect) items in a list.",
        example: "When meeting a group of people, you're more likely to remember the names of the first few and the last few people introduced.",
      },
      {
        name: "Primacy Effect",
        definition: "Better recall for items presented first in a list; likely due to more rehearsal transferring them to long-term memory.",
        significance: "Part of the serial position effect, reflects LTM influence."
      },
      {
        name: "Recency Effect",
        definition: "Better recall for items presented last in a list; likely due to items still being in short-term/working memory.",
        significance: "Part of the serial position effect, reflects STM/Working Memory influence."
      },
    ],
  },
  {
    title: "Topic 5.5: Forgetting",
    terms: [
      {
        name: "Amnesia",
        definition: "Memory loss, which can result from brain injury, disease, or psychological trauma.",
      },
      {
        name: "Anterograde Amnesia",
        definition: "An inability to form new explicit memories after the event that caused the amnesia (though implicit memory formation may remain intact).",
        example: "Patient H.M., who could not form new declarative memories after hippocampus removal but could learn new skills.",
        significance: "Demonstrates the role of the hippocampus in forming new explicit memories."
      },
      {
        name: "Retrograde Amnesia",
        definition: "An inability to retrieve information from one's past, occurring before the event that caused the amnesia.",
        example: "Someone losing memories of the weeks leading up to a car accident.",
      },
      {
        name: "Encoding Failure",
        definition: "Failure to process information into the memory system in the first place.",
        example: "Not remembering where you put your keys because you weren't paying attention when you set them down.",
        significance: "Much of what we perceive as forgetting is actually failed encoding."
      },
      {
        name: "Storage Decay",
        definition: "The gradual fading of the physical memory trace over time.",
        significance: "Represented by Ebbinghaus' Forgetting Curve, which shows rapid initial forgetting that levels off over time.",
      },
      {
        name: "Retrieval Failure",
        definition: "The inability to access stored information, even though it is present in memory.",
        example: "The tip-of-the-tongue phenomenon.",
        significance: "Often due to lack of adequate retrieval cues or interference."
      },
      {
        name: "Proactive Interference",
        definition: "The disruptive effect of prior learning on the recall of new information (Mnemonic: PORN - Proactive = Old interferes with New).",
        example: "Difficulty remembering your new password because your old password keeps coming to mind.",
      },
      {
        name: "Retroactive Interference",
        definition: "The disruptive effect of new learning on the recall of old information (Mnemonic: PORN - Retroactive = New interferes with Old).",
        example: "Difficulty remembering lyrics to an old song after learning a new song with a similar tune.",
      },
      {
        name: "Tip-of-the-Tongue (TOT) Phenomenon",
        definition: "A retrieval failure phenomenon where one feels that a known word, name, or concept is easily recallable but cannot quite be fully retrieved.",
        example: "Knowing an actor's name starts with 'S' and feeling it's right there, but being unable to say it.",
      },
      // Note: "Motivated Forgetting" is a heading.
      {
        name: "Repression",
        definition: "In psychoanalytic theory (Freud), the basic defense mechanism that banishes from consciousness anxiety-arousing thoughts, feelings, and memories. This concept is controversial and lacks strong empirical support in modern memory research.",
        significance: "A highly debated Freudian concept regarding motivated forgetting of traumatic memories."
      },
    ],
  },
  {
    title: "Topic 5.6: Memory Construction Errors",
    terms: [
      {
        name: "Memory Reconsolidation",
        definition: "A process in which previously consolidated memories, when retrieved, become potentially liable to modification before being stored again.",
        significance: "Suggests that memories are dynamic and can be altered each time they are recalled.",
      },
      {
        name: "Misinformation Effect",
        definition: "When misleading information has corrupted one's memory of an event.",
        example: "Witnesses recalling broken glass at a car accident scene after being asked about cars 'smashing' (Loftus studies).",
        significance: "Highlights the malleability of memory and the danger of leading questions (Key figure: Elizabeth Loftus)."
      },
      {
        name: "Source Amnesia (Source Misattribution)",
        definition: "Faulty memory for how, when, or where information was learned or imagined. Source amnesia, along with the misinformation effect, is at the heart of many false memories.",
        example: "Remembering a story told by a friend as something you experienced yourself.",
      },
      {
        name: "Déjà Vu",
        definition: "That eerie sense that \"I've experienced this before.\" Cues from the current situation may unconsciously trigger retrieval of an earlier experience.",
        significance: "Often explained by source amnesia or a brief processing delay causing a feeling of familiarity.",
      },
      {
        name: "False Memories",
        definition: "Inaccurate recollections of events that feel real. They can be created by suggestion or misleading information.",
        example: "Loftus's research showing people could be led to 'remember' being lost in a mall as a child, even if it never happened.",
        significance: "Demonstrates that memory is reconstructive, not a perfect recording."
      },
      {
        name: "Eyewitness Testimony",
        definition: "Accounts given by people of an event they have witnessed. Prone to errors due to factors like the misinformation effect, source amnesia, stress, weapon focus, and biases.",
        significance: "Memory fallibility has significant implications for the legal system.",
      },
    ],
  },
    {
    title: "Topic 5.7: Introduction to Thinking and Problem Solving",
    terms: [
      {
        name: "Cognition",
        definition: "All the mental activities associated with thinking, knowing, remembering, and communicating.",
      },
      {
        name: "Concept",
        definition: "A mental grouping of similar objects, events, ideas, or people.",
        example: "The concept 'chair' includes many different types (desk chair, dining chair, armchair).",
      },
      {
        name: "Prototype",
        definition: "A mental image or best example of a category. Matching new items to a prototype provides a quick and easy method for sorting items into categories.",
        example: "A robin is often a prototype for the concept 'bird' in North America.",
      },
      // Note: "Problem Solving Strategies" is a heading.
      {
        name: "Algorithm",
        definition: "A methodical, logical rule or procedure that guarantees solving a particular problem. Contrasts with the usually speedier—but also more error-prone—use of heuristics.",
        example: "Trying every possible key on a keyring to open a lock; following a mathematical formula.",
      },
      {
        name: "Heuristic",
        definition: "A simple thinking strategy (a mental shortcut) that often allows us to make judgments and solve problems efficiently; usually speedier but also more error-prone than algorithms.",
        example: "Checking the fridge first when looking for milk; using 'rule of thumb' estimates.",
      },
      {
        name: "Insight",
        definition: "A sudden realization of a problem's solution; contrasts with strategy-based solutions. Often described as an 'Aha!' moment.",
        example: "Suddenly understanding a riddle after puzzling over it.",
      },
      // Note: "Obstacles to Problem Solving" is a heading.
      {
        name: "Confirmation Bias",
        definition: "A tendency to search for information that supports our preconceptions and to ignore or distort contradictory evidence.",
        example: "Only seeking out news sources that confirm your existing political beliefs.",
      },
      {
        name: "Fixation",
        definition: "In cognition, the inability to see a problem from a fresh perspective; an obstacle to problem solving.",
        significance: "Includes mental set and functional fixedness."
      },
      {
        name: "Mental Set",
        definition: "A tendency to approach a problem in one particular way, often a way that has been successful in the past.",
        example: "Using the same math strategy for a new type of problem where it doesn't apply.",
      },
      {
        name: "Functional Fixedness",
        definition: "The tendency to think of things only in terms of their usual functions; an impediment to problem solving.",
        example: "Not realizing a thumbtack box could be used as a candle holder (Duncker's candle problem).",
      },
    ],
  },
  {
    title: "Topic 5.8: Biases and Errors in Thinking",
    terms: [
      // Note: "Heuristics (cont.)" is a heading.
      {
        name: "Representativeness Heuristic",
        definition: "Judging the likelihood of things in terms of how well they seem to represent, or match, particular prototypes; may lead us to ignore other relevant information (like base rates).",
        example: "Assuming someone described as short, slim, and likes poetry is more likely an Ivy League classics professor than a truck driver, despite the much higher number of truck drivers.",
      },
      {
        name: "Availability Heuristic",
        definition: "Estimating the likelihood of events based on their availability in memory; if instances come readily to mind (perhaps because of their vividness), we presume such events are common.",
        example: "Overestimating the danger of shark attacks because news reports about them are dramatic and easily recalled.",
      },
      {
        name: "Overconfidence",
        definition: "The tendency to be more confident than correct—to overestimate the accuracy of our beliefs and judgments.",
        example: "Students often overestimate how quickly they can complete assignments.",
      },
      {
        name: "Belief Perseverance",
        definition: "Clinging to one's initial conceptions after the basis on which they were formed has been discredited.",
        example: "Continuing to believe a rumor about someone even after being shown definitive proof it's false.",
      },
      {
        name: "Framing",
        definition: "The way an issue is posed or worded; how an issue is framed can significantly affect decisions and judgments.",
        example: "Ground beef described as '75% lean' is perceived more positively than beef described as '25% fat'."
      },
    ],
  },
  {
    title: "Topic 5.9: Introduction to Intelligence",
    terms: [
      {
        name: "Intelligence",
        definition: "(Definition is debated) Mental quality consisting of the ability to learn from experience, solve problems, and use knowledge to adapt to new situations.",
        significance: "A core concept in psychology, but its precise definition and measurement are subjects of ongoing discussion."
      },
      {
        name: "General Intelligence (g factor)",
        definition: "According to Spearman and others, a general intelligence factor that underlies specific mental abilities and is therefore measured by every task on an intelligence test.",
        significance: "Proposed by Charles Spearman; suggests a single underlying factor influences performance across diverse cognitive tasks."
      },
      {
        name: "Factor Analysis",
        definition: "A statistical procedure that identifies clusters of related items (called factors) on a test; used to identify different dimensions of performance that underlie a person's total score.",
        significance: "Tool used by Spearman to identify 'g' and by others (like Thurstone) to identify separate primary mental abilities."
      },
      // Note: "Theories of Multiple Intelligences" is a heading.
      {
        name: "Gardner's Multiple Intelligences",
        definition: "Howard Gardner's theory proposing eight relatively independent intelligences: Linguistic, Logical-Mathematical, Musical, Spatial, Bodily-Kinesthetic, Intrapersonal (self), Interpersonal (others), Naturalist. (Later added Existential). Criticized for lack of strong empirical support.",
        significance: "Challenges the idea of a single intelligence, suggesting diverse talents represent distinct intelligences."
      },
      {
        name: "Sternberg's Triarchic Theory",
        definition: "Robert Sternberg's theory proposing three intelligences: Analytical (academic problem-solving), Creative (adapting to novel situations, generating novel ideas), and Practical (everyday tasks, street smarts).",
        significance: "Offers a broader view of intelligence beyond traditional academic measures."
      },
      {
        name: "Emotional Intelligence (EI/EQ)",
        definition: "The ability to perceive, understand, manage, and use emotions effectively.",
        significance: "Associated with Mayer, Salovey, and Caruso; correlates with social and personal success."
      },
    ],
  },
    {
    title: "Topic 5.10: Psychometric Principles and Intelligence Testing",
    terms: [
      {
        name: "Intelligence Test",
        definition: "A method for assessing an individual's mental aptitudes and comparing them with those of others, using numerical scores.",
      },
      {
        name: "Aptitude Test",
        definition: "A test designed to predict a person's future performance; aptitude is the capacity to learn.",
        example: "The SAT or ACT designed to predict college success.",
      },
      {
        name: "Achievement Test",
        definition: "A test designed to assess what a person has learned.",
        example: "An AP Psychology exam, a final exam in a history course.",
      },
      // Note: "History of Intelligence Testing" is a heading.
      {
        name: "Francis Galton",
        definition: "Pioneering figure in intelligence testing who believed in hereditary genius, attempted to measure 'natural ability,' and promoted eugenics.",
        significance: "Early proponent of measuring individual differences and the heritability of intelligence."
      },
      {
        name: "Alfred Binet",
        definition: "French psychologist who developed the first practical intelligence test to identify children needing special educational attention in French schools; focused on mental age.",
        significance: "Created the concept of mental age and the first widely used intelligence scale."
      },
      {
        name: "Mental Age (ma)",
        definition: "A measure of intelligence test performance devised by Binet; the chronological age that most typically corresponds to a given level of performance.",
        example: "A child who does as well as an average 8-year-old is said to have a mental age of 8.",
      },
      {
        name: "Lewis Terman",
        definition: "American psychologist who adapted Binet's test for American use (creating the Stanford-Binet); promoted widespread intelligence testing and believed intelligence was largely inherited.",
        significance: "Popularized IQ testing in the US with the Stanford-Binet revision."
      },
      {
        name: "Stanford-Binet Test",
        definition: "The widely used American revision (by Terman at Stanford University) of Binet's original intelligence test.",
      },
      {
        name: "Intelligence Quotient (IQ)",
        definition: "Originally defined as the ratio of mental age (ma) to chronological age (ca) multiplied by 100 (IQ = ma/ca × 100). This formula works well for children but not adults.",
        significance: "Popularized by Terman; provided a single numerical score for intelligence."
      },
      {
        name: "Deviation IQ",
        definition: "On contemporary intelligence tests, the average performance for a given age is assigned a score of 100, and scores are distributed relative to this average based on standard deviations.",
        significance: "Modern method of scoring intelligence tests (like WAIS/WISC) by comparing performance to age-matched peers."
      },
      {
        name: "Wechsler Adult Intelligence Scale (WAIS) & WISC (for children)",
        definition: "Developed by David Wechsler, these are the most widely used intelligence tests; contain verbal and performance (nonverbal) subtests, providing an overall IQ score and scores for various indices (e.g., verbal comprehension, perceptual reasoning).",
        significance: "Offers a more nuanced assessment than just a single IQ score."
      },
      // Note: "Psychometric Principles" is a heading.
      {
        name: "Standardization",
        definition: "Defining uniform testing procedures and meaningful scores by comparison with the performance of a pretested group (the standardization sample).",
        significance: "Ensures consistency in administration and scoring, allowing for score comparison."
      },
      {
        name: "Normal Curve",
        definition: "The symmetrical, bell-shaped curve that describes the distribution of many physical and psychological attributes. Most scores fall near the average, and fewer scores lie near the extremes. IQ scores are typically standardized to fit this curve (Mean=100, SD=15).",
        significance: "Provides a basis for interpreting standardized test scores."
      },
      {
        name: "Reliability",
        definition: "The extent to which a test yields consistent results, as assessed by the consistency of scores on two halves of the test (split-half), on alternate forms of the test, or on retesting (test-retest).",
        significance: "A reliable test gives dependable scores over time or across different forms."
      },
      {
        name: "Validity",
        definition: "The extent to which a test measures or predicts what it is supposed to.",
        significance: "A valid test accurately assesses the intended construct."
      },
      {
        name: "Content Validity",
        definition: "The extent to which a test samples the behavior or knowledge domain that is of interest.",
        example: "A driving test has high content validity if it includes tasks essential for driving.",
      },
      {
        name: "Predictive Validity (Criterion-Related Validity)",
        definition: "The success with which a test predicts the behavior it is designed to predict; it is assessed by computing the correlation between test scores and the criterion behavior.",
        example: "The correlation between SAT scores and college GPA indicates the SAT's predictive validity for college performance.",
      },
    ],
  },
  {
    title: "Topic 5.11: Components of Language and Language Acquisition",
    terms: [
      {
        name: "Language",
        definition: "Our spoken, written, or signed words and the ways we combine them to communicate meaning.",
      },
      // Note: "Components of Language" is a heading.
      {
        name: "Phoneme",
        definition: "In a language, the smallest distinctive sound unit.",
        example: "The sounds /b/, /a/, /t/ in the word 'bat'. English has about 40 phonemes.",
      },
      {
        name: "Morpheme",
        definition: "In a language, the smallest unit that carries meaning; may be a word or a part of a word (such as a prefix or suffix).",
        example: "The word 'unforgettable' has three morphemes: 'un-', 'forget', '-able'.",
      },
      {
        name: "Grammar",
        definition: "In a language, a system of rules (semantics and syntax) that enables us to communicate with and understand others.",
      },
      {
        name: "Semantics",
        definition: "The set of rules for deriving meaning from sounds (morphemes, words) and sentences in a given language.",
        example: "Adding '-ed' to a verb indicates past tense.",
      },
      {
        name: "Syntax",
        definition: "The set of rules for combining words into grammatically sensible sentences in a given language.",
        example: "In English, adjectives usually come before nouns (e.g., 'white house').",
      },
      // Note: "Language Development Stages" is a heading.
      {
        name: "Receptive Language",
        definition: "The ability to understand what is said to and about oneself. Develops before productive language.",
        example: "Infants start understanding words before they can speak them."
      },
      {
        name: "Productive Language",
        definition: "The ability to produce words.",
        example: "Speaking or signing words.",
      },
      {
        name: "Babbling Stage",
        definition: "Beginning around 4 months, the stage of speech development in which an infant spontaneously utters various sounds at first unrelated to the household language.",
        example: "Babies making sounds like 'ba-ba-ba' or 'goo-goo'."
      },
      {
        name: "One-Word Stage (Holophrastic Stage)",
        definition: "The stage in speech development, from about age 1 to 2, during which a child speaks mostly in single words.",
        example: "A child saying 'Doggie' to mean 'Look at the dog'.",
      },
      {
        name: "Two-Word Stage (Telegraphic Speech)",
        definition: "Beginning about age 2, the stage in speech development during which a child speaks mostly in two-word statements, often following rules of syntax.",
        example: "A child saying 'Want juice' or 'Go car'.",
      },
      {
        name: "Longer Phrases/Sentences",
        definition: "After the two-word stage, children rapidly begin uttering longer phrases and sentences, applying grammatical rules.",
      },
      // Note: "Theories of Language Acquisition" is a heading.
      {
        name: "Noam Chomsky: Universal Grammar, LAD",
        definition: "Chomsky's theory that humans are biologically predisposed to learn language with innate grammatical principles (Universal Grammar) enabled by a brain mechanism called the Language Acquisition Device (LAD).",
        significance: "Nativist perspective emphasizing innate capacity for language."
      },
      {
        name: "B.F. Skinner: Operant Learning",
        definition: "Skinner's behaviorist view that language development occurs through principles of learning, including association (pairing sights with sounds), imitation (modeling others' speech), and reinforcement (rewards for correct utterances).",
        significance: "Learning theory perspective emphasizing environmental influences."
      },
      {
        name: "Critical Period (Sensitive Period)",
        definition: "A period early in life when exposure to certain stimuli or experiences is needed to produce normal development. For language acquisition (especially grammar and accents), childhood represents an optimal period.",
        significance: "Explains why mastering language becomes harder with age."
      },
      {
        name: "Aphasia",
        definition: "Impairment of language, usually caused by left hemisphere damage either to Broca's area (impairing speaking) or to Wernicke's area (impairing understanding).",
      },
      {
        name: "Broca's Aphasia",
        definition: "Impaired language production (speaking); difficulty forming grammatical sentences. Typically associated with damage to Broca's area in the left frontal lobe. (Expressive Aphasia).",
      },
      {
        name: "Wernicke's Aphasia",
        definition: "Impaired language comprehension (understanding); speech may be fluent but meaningless. Typically associated with damage to Wernicke's area in the left temporal lobe. (Receptive Aphasia).",
      },
      {
        name: "Linguistic Determinism",
        definition: "Benjamin Lee Whorf's strong hypothesis that language *determines* the way we think. This strong version is largely discredited.",
        significance: "Strong form of the Sapir-Whorf hypothesis."
      },
      {
        name: "Linguistic Influence (Relativity)",
        definition: "The weaker, more accepted version of Whorf's hypothesis: language *affects* or *influences* thought and perception.",
        example: "Having different words for shades of blue might influence how readily one perceives differences between them. (Key Figure: Benjamin Lee Whorf).",
        significance: "Suggests a two-way relationship between language and thought."
      },
    ],
  },
  // Add other topics (5.12 onwards if applicable) here following the same structure
]

// Sample data for Unit 6 (Placeholders remain)
 // Data structure for Unit 6 (Updated with provided terms)
const unit6Topics = [
  {
    title: "Topic 6.1: The Lifespan and Physical Development in Childhood",
    terms: [
      {
        name: "Developmental Psychology",
        definition: "Studies physical, cognitive, and social change throughout the life span.",
        significance: "Provides understanding of how humans grow and change over time, addressing major issues like Nature vs. Nurture, Continuity vs. Stages, Stability vs. Change.",
      },
      {
        name: "Nature vs. Nurture",
        definition: "The longstanding controversy over the relative contributions that genes (nature) and experience (nurture) make to the development of psychological traits and behaviors.",
        significance: "A major theme in developmental psychology; contemporary view emphasizes interaction.",
      },
      {
        name: "Continuity vs. Stages",
        definition: "The debate about whether development is a gradual, continuous process or proceeds through a sequence of separate stages.",
        significance: "Addresses how developmental change occurs (e.g., Piaget's stages vs. more gradual models).",
      },
      {
        name: "Stability vs. Change",
        definition: "The debate about whether early personality traits persist through life or become different as we age.",
        significance: "Examines the consistency of personality and other traits over the lifespan.",
      },
      {
        name: "Conception",
        definition: "The moment of fertilization, when a sperm unites with an egg.",
        significance: "Marks the beginning of prenatal development.",
      },
      {
        name: "Zygote",
        definition: "The fertilized egg; it enters a 2-week period of rapid cell division and develops into an embryo.",
        significance: "First stage of prenatal development (approx. 0-2 weeks).",
      },
      {
        name: "Embryo",
        definition: "The developing human organism from about 2 weeks after fertilization through the second month.",
        example: "During this stage, major organs begin to form and function.",
        significance: "Critical period for organogenesis; high vulnerability to teratogens (approx. 2-8 weeks).",
      },
      {
        name: "Fetus",
        definition: "The developing human organism from 9 weeks after conception to birth.",
        example: "By 6 months, organs are sufficiently formed to allow survival if born prematurely.",
        significance: "Longest prenatal stage; involves growth and maturation (approx. 9 weeks - birth).",
      },
      {
        name: "Teratogens",
        definition: "Agents, such as chemicals and viruses, that can reach the embryo or fetus during prenatal development and cause harm.",
        example: "Alcohol, certain drugs (prescription or illicit), viruses (like Zika or rubella), environmental toxins.",
        significance: "Highlight the importance of the prenatal environment for healthy development.",
      },
      {
        name: "Fetal Alcohol Syndrome (FAS)",
        definition: "Physical and cognitive abnormalities in children caused by a pregnant woman's heavy drinking. In severe cases, signs include a small, out-of-proportion head and abnormal facial features.",
        significance: "A leading preventable cause of birth defects and intellectual disability.",
      },
      {
        name: "Habituation",
        definition: "Decreasing responsiveness with repeated stimulation. As infants gain familiarity with repeated exposure to a stimulus, their interest wanes and they look away sooner.",
        example: "Used in infant research: showing an infant the same picture repeatedly until they look less, then showing a new picture to see if looking time increases (indicating they perceive it as different).",
        significance: "A simple form of learning used to study infant perception and cognition.",
      },
      {
        name: "Reflexes",
        definition: "Inborn, automatic responses to specific sensory stimuli.",
        example: "Rooting (turning head toward touch on cheek), Sucking, Grasping (closing hand around object), Moro (startle reflex), Babinski (fanning toes when foot stroked).",
        significance: "Provide newborns with adaptive responses for survival; presence/absence indicates neurological health.",
      },
      {
        name: "Maturation",
        definition: "Biological growth processes that enable orderly changes in behavior, relatively uninfluenced by experience. Sets the basic course of development; experience adjusts it.",
        example: "Sequence of motor development (sitting before crawling, crawling before walking) is largely due to maturation of the nervous system.",
        significance: "Explains universal sequences in development; distinguishes biological readiness from learned skills.",
      },
      {
        name: "Brain Development",
        definition: "Includes rapid neuron growth (synaptogenesis) after birth, followed by pruning (elimination of unused connections) and myelination (insulation of axons).",
        significance: "Underlies cognitive and motor development; experience shapes neural connections.",
      },
      {
        name: "Motor Development Sequence",
        definition: "The universal sequence of developing motor skills (e.g., lift head, roll over, sit up, crawl, walk).",
        significance: "Demonstrates the role of maturation, although timing varies with experience and culture.",
      },
    ],
  },
  {
    title: "Topic 6.2: Social Development in Childhood",
    terms: [
      {
        name: "Attachment",
        definition: "An emotional tie with another person; shown in young children by their seeking closeness to the caregiver and showing distress on separation.",
        significance: "Crucial for social and emotional development; forms the basis for future relationships.",
      },
      {
        name: "Harry Harlow's Monkey Studies",
        definition: "Experiments with infant monkeys separated from mothers, given wire mesh 'mother' with milk vs. soft cloth 'mother' without milk.",
        example: "Monkeys overwhelmingly preferred the cloth mother, especially when scared.",
        significance: "Demonstrated the critical importance of 'contact comfort' over nourishment in forming attachment.",
      },
      {
        name: "Critical Period",
        definition: "An optimal period early in the life of an organism when exposure to certain stimuli or experiences produces normal development.",
        example: "Imprinting in birds; language acquisition in humans (sensitive period).",
        significance: "Suggests certain developmental processes must occur within a specific timeframe.",
      },
      {
        name: "Imprinting",
        definition: "The process by which certain animals form strong attachments during an early-life critical period.",
        example: "Konrad Lorenz studied ducks who imprinted on him as the first moving object they saw.",
        significance: "Demonstrates a rigid form of attachment in some species; human attachment is more flexible.",
      },
      {
        name: "Mary Ainsworth's Strange Situation Experiment",
        definition: "A procedure developed by Mary Ainsworth to observe attachment relationships between a caregiver and child. Involves brief separations and reunions.",
        significance: "Led to the classification of different attachment styles (secure, insecure).",
      },
      {
        name: "Attachment Styles",
        definition: "Characteristic patterns of relating to others based on early attachment experiences.",
        significance: "Influence emotional regulation and relationship patterns later in life.",
        subtypes: [ // Using subtypes here for the list
          { name: "Secure Attachment", definition: "Infant plays comfortably, explores environment when caregiver present; distressed when caregiver leaves, seeks contact and is easily soothed upon return. Associated with sensitive, responsive caregivers." },
          { name: "Insecure Attachment - Avoidant", definition: "Infant seems indifferent to caregiver's presence, departure, and return; may avoid contact. Associated with insensitive, rejecting caregivers." },
          { name: "Insecure Attachment - Anxious/Ambivalent/Resistant", definition: "Infant often clings to caregiver, is extremely distressed when caregiver leaves, but may be ambivalent (e.g., resist comfort) upon return. Associated with inconsistent caregivers." },
          { name: "Insecure Attachment - Disorganized", definition: "(Added later by Main & Solomon) Infant shows contradictory behaviors (e.g., approaching caregiver while looking away), confusion, or fear. Often associated with neglect or abuse." }
        ],
      },
      {
        name: "Temperament",
        definition: "A person's characteristic emotional reactivity and intensity; believed to be biologically based and relatively stable over time.",
        example: "Some infants are naturally 'easy' (cheerful, relaxed), others 'difficult' (irritable, intense), others 'slow-to-warm-up' (resist new situations).",
        significance: "Influences attachment style and personality development, though environment also plays a role.",
      },
      {
        name: "Erik Erikson's Stages of Psychosocial Development",
        definition: "A theory proposing eight stages of social development, each characterized by a specific psychosocial crisis or task that must be resolved.",
        significance: "Highlights the interplay between psychological development and social experiences across the entire lifespan. Early childhood stages include: Trust vs. Mistrust (Infancy: 0-1 yr), Autonomy vs. Shame/Doubt (Toddler: 1-3 yrs), Initiative vs. Guilt (Preschool: 3-6 yrs), Competence/Industry vs. Inferiority (Elementary: 6-puberty).",
      },
       {
        name: "Trust vs. Mistrust",
        definition: "(Erikson: Infancy, 0-1 yr) If needs are dependably met, infants develop a sense of basic trust.",
        significance: "Foundation for future relationships and sense of security.",
       },
       {
        name: "Autonomy vs. Shame/Doubt",
        definition: "(Erikson: Toddlerhood, 1-3 yrs) Toddlers learn to exercise their will and do things for themselves, or they doubt their abilities.",
        significance: "Development of independence and self-control.",
       },
       {
        name: "Initiative vs. Guilt",
        definition: "(Erikson: Preschool, 3-6 yrs) Preschoolers learn to initiate tasks and carry out plans, or they feel guilty about their efforts to be independent.",
        significance: "Development of purpose and ability to plan/undertake activities.",
       },
       {
        name: "Competence (Industry) vs. Inferiority",
        definition: "(Erikson: Elementary School, 6 yrs to puberty) Children learn the pleasure of applying themselves to tasks, or they feel inferior.",
        significance: "Development of sense of competence in skills and social interactions.",
       },
      {
        name: "Basic Trust",
        definition: "According to Erik Erikson, a sense that the world is predictable and trustworthy; said to be formed during infancy by appropriate experiences with responsive caregivers.",
        significance: "Core component of the first stage (Trust vs. Mistrust).",
      },
      {
        name: "Self-Concept",
        definition: "All our thoughts and feelings about ourselves, in answer to the question, \"Who am I?\" Develops gradually, becoming more stable around age 12.",
        significance: "Understanding of one's own identity and attributes.",
      },
      {
        name: "Parenting Styles (Diana Baumrind)",
        definition: "Characteristic ways parents interact with their children.",
        significance: "Correlated with different child outcomes.",
        subtypes: [
          { name: "Authoritarian", definition: "Parents impose rules and expect obedience; tend to be coercive. (\"Too hard\")" },
          { name: "Permissive", definition: "Parents make few demands, set few limits, and use little punishment; tend to be unrestraining. (\"Too soft\")" },
          { name: "Negligent/Uninvolved", definition: "Parents are careless, inattentive, and do not seek a close relationship with their children. (\"Too uncaring\")" },
          { name: "Authoritative", definition: "Parents are both demanding and responsive. They exert control by setting rules, but also explain reasons and encourage discussion. (\"Just right\") Associated with highest self-esteem, self-reliance, and social competence in children." }
        ],
      },
    ],
  },
  {
    title: "Topic 6.3: Cognitive Development in Childhood",
    terms: [
      {
        name: "Cognition",
        definition: "All the mental activities associated with thinking, knowing, remembering, and communicating.",
        significance: "The focus of cognitive development studies.",
      },
      {
        name: "Jean Piaget's Theory of Cognitive Development",
        definition: "A highly influential theory proposing that children's minds develop through a series of stages, driven by their efforts to make sense of their experiences.",
        significance: "Emphasized children as active learners ('little scientists'); identified key cognitive milestones and limitations at different ages.",
      },
      {
        name: "Schema",
        definition: "A concept or framework that organizes and interprets information.",
        example: "A child's schema for 'dog' might include furry, four legs, barks.",
        significance: "Mental structures we use to understand the world.",
      },
      {
        name: "Assimilation",
        definition: "Interpreting our new experiences in terms of our existing schemas.",
        example: "A toddler seeing a cat and calling it 'doggie' because it fits their existing four-legged animal schema.",
        significance: "Integrating new information into existing mental frameworks.",
      },
      {
        name: "Accommodation",
        definition: "Adapting our current understandings (schemas) to incorporate new information.",
        example: "The toddler learns that the 'doggie' schema is too broad and accommodates by creating a new schema for 'cat'.",
        significance: "Modifying mental frameworks to fit new information; drives cognitive growth.",
      },
      {
        name: "Piaget's Stages of Cognitive Development",
        definition: "Four distinct stages of cognitive development proposed by Piaget: Sensorimotor, Preoperational, Concrete Operational, Formal Operational.",
        significance: "Describes qualitatively different ways of thinking at different ages.",
        subtypes: [ // Using subtypes for the list
          { name: "Sensorimotor Stage", definition: "(Birth to ~2 years) Infants know the world mostly through sensory impressions and motor activities. Key developments: Object Permanence, Stranger Anxiety." },
          { name: "Preoperational Stage", definition: "(~2 to ~6/7 years) Child learns to use language but does not yet comprehend mental operations of concrete logic. Key features: Pretend Play, Egocentrism, Lack of Conservation (due to Centration, Irreversibility). Theory of Mind begins developing." },
          { name: "Concrete Operational Stage", definition: "(~7 to ~11 years) Children gain mental operations enabling logical thought about concrete events. Key abilities: Conservation, Mathematical Transformations, Reversibility, Decentration." },
          { name: "Formal Operational Stage", definition: "(~12 through adulthood) People begin to think logically about abstract concepts. Key abilities: Abstract Logic, Potential for Mature Moral Reasoning." }
        ],
      },
       {
        name: "Sensorimotor Stage",
        definition: "(Piaget: Birth to ~2 years) Infants explore the world through senses (looking, hearing, touching, mouthing) and actions (grasping, crawling).",
        significance: "Focus on interacting with the immediate physical world; development of object permanence is a major achievement.",
       },
      {
        name: "Object Permanence",
        definition: "The awareness that things continue to exist even when not perceived. Develops around 8 months according to Piaget.",
        significance: "Marks a transition towards symbolic thought; understanding that the world exists independently of one's own actions/perceptions.",
      },
      {
        name: "Stranger Anxiety",
        definition: "The fear of strangers that infants commonly display, beginning by about 8 months of age.",
        significance: "Related to development of object permanence and attachment; indicates ability to distinguish familiar from unfamiliar faces.",
      },
       {
        name: "Preoperational Stage",
        definition: "(Piaget: ~2 to ~6/7 years) Children can represent things with words and images (symbolic thought) but lack logical reasoning abilities.",
        significance: "Marked by significant language development and pretend play, but also cognitive limitations like egocentrism and lack of conservation.",
       },
      {
        name: "Pretend Play",
        definition: "Symbolic play where children use objects or actions to represent other things.",
        significance: "Develops during preoperational stage; important for cognitive and social development.",
      },
      {
        name: "Egocentrism",
        definition: "In Piaget's theory, the preoperational child's difficulty taking another's point of view.",
        example: "A child covering their eyes and thinking others can't see them; assuming others see the world exactly as they do (e.g., three mountains task).",
        significance: "A key limitation of preoperational thought.",
      },
      {
        name: "Conservation",
        definition: "The principle (which Piaget believed to be a part of concrete operational reasoning) that properties such as mass, volume, and number remain the same despite changes in the forms of objects.",
        example: "Understanding that pouring water into a taller, thinner glass doesn't change the amount of water.",
        significance: "LACKED by preoperational children; attained in concrete operational stage.",
      },
      {
        name: "Centration",
        definition: "In Piaget's theory, the tendency of preoperational children to focus attention on only one aspect of a situation, neglecting other important features.",
        example: "Focusing only on the height of the water in the glass, ignoring its width, when judging volume.",
        significance: "Underlies the inability to conserve.",
      },
      {
        name: "Irreversibility",
        definition: "In Piaget's theory, the inability of the young child (preoperational) to mentally reverse an action.",
        example: "Cannot mentally pour the water back into the original glass to see that the amount is the same.",
        significance: "Contributes to the lack of conservation.",
      },
      {
        name: "Theory of Mind",
        definition: "People's ideas about their own and others' mental states—about their feelings, perceptions, and thoughts, and the behaviors these might predict.",
        example: "Understanding that someone else might hold a false belief (e.g., Sally-Anne task); realizing others have different perspectives.",
        significance: "Develops gradually during preschool years; crucial for social interaction. Impaired in Autism Spectrum Disorder.",
      },
      {
        name: "Concrete Operational Stage",
        definition: "(Piaget: ~7 to ~11 years) Children gain the mental operations that enable them to think logically about concrete events.",
        significance: "Can perform conservation tasks, understand mathematical transformations (reversibility), grasp analogies, but still struggle with abstract/hypothetical thinking.",
       },
      {
        name: "Formal Operational Stage",
        definition: "(Piaget: ~12 through adulthood) People begin to think logically about abstract concepts and hypothetical situations.",
        significance: "Capable of abstract reasoning, systematic problem solving, potential for mature moral reasoning.",
       },
      {
        name: "Reflecting on Piaget's Theory",
        definition: "Acknowledging Piaget's contributions while noting modern criticisms.",
        significance: "Criticisms include: development seen as more continuous, abilities emerge earlier, formal logic not universal, overlooks social/cultural influences.",
      },
      {
        name: "Lev Vygotsky's Sociocultural Theory",
        definition: "A theory emphasizing the role of social interaction, language, and culture in cognitive development.",
        significance: "Contrasts with Piaget's focus on individual exploration; highlights learning through interaction.",
      },
      {
        name: "Zone of Proximal Development (ZPD)",
        definition: "In Vygotsky's theory, the range between what a child can achieve independently and what they can achieve with guidance and encouragement from a 'more knowledgeable other' (MKO).",
        significance: "Where learning occurs; suggests instruction should target this zone.",
      },
      {
        name: "Scaffolding",
        definition: "In Vygotsky's theory, a framework offering temporary support as children develop higher levels of thinking.",
        example: "A teacher providing hints or breaking down a problem for a student.",
        significance: "The process by which MKOs help children learn within their ZPD.",
      },
      {
        name: "Vygotsky and Language",
        definition: "Vygotsky viewed language as central to cognitive development, arguing that inner/private speech (talking to oneself) helps guide thinking and problem-solving.",
        significance: "Contrasts with Piaget's view of egocentric speech as immature.",
      },
      {
        name: "Autism Spectrum Disorder (ASD)",
        definition: "A disorder that appears in childhood and is marked by significant deficiencies in communication and social interaction, and by rigidly fixated interests and repetitive behaviors. Severity varies across a spectrum.",
        significance: "Neurological disorder often associated with impaired theory of mind.",
      },
    ],
  },
  {
    title: "Topic 6.4: Adolescent Development",
    terms: [
      {
        name: "Adolescence",
        definition: "The transition period from childhood to adulthood, extending from puberty to independence.",
        significance: "Period of significant physical, cognitive, and social changes.",
      },
      {
        name: "Puberty",
        definition: "The period of sexual maturation, during which a person becomes capable of reproducing. Marked by hormonal surges and physical changes.",
        significance: "Biological starting point of adolescence.",
      },
      {
        name: "Primary Sex Characteristics",
        definition: "The body structures (ovaries, testes, and external genitalia) that make sexual reproduction possible.",
        significance: "Develop during puberty.",
      },
      {
        name: "Secondary Sex Characteristics",
        definition: "Nonreproductive sexual traits, such as female breasts and hips, male voice quality, and body hair.",
        significance: "Develop during puberty, distinguishing males and females.",
      },
      {
        name: "Menarche",
        definition: "The first menstrual period in girls.",
        significance: "Key marker of female puberty.",
      },
      {
        name: "Spermarche",
        definition: "The first ejaculation in boys.",
        significance: "Key marker of male puberty.",
      },
      {
        name: "Brain Development in Adolescence",
        definition: "Continued maturation, particularly of the frontal lobes (involved in judgment, planning, impulse control), which lags behind the development of the limbic system (emotional center). Pruning of unused neural connections continues.",
        significance: "Helps explain increased risk-taking and emotional reactivity during adolescence.",
      },
      {
        name: "Cognitive Development in Adolescence",
        definition: "Development of formal operational thinking (Piaget), including abstract reasoning, hypothetical thought, and consideration of consequences.",
        significance: "Enables more complex thought processes and emergence of moral reasoning.",
      },
      {
        name: "Moral Development (Lawrence Kohlberg's Levels)",
        definition: "Theory proposing three basic levels of moral thinking: preconventional, conventional, and postconventional, based on reasoning used to resolve moral dilemmas.",
        significance: "Influential stage theory of moral reasoning development.",
        subtypes: [
          { name: "Preconventional Morality", definition: "(Before age 9) Focus on self-interest; obey rules to avoid punishment or gain concrete rewards." },
          { name: "Conventional Morality", definition: "(Early adolescence) Uphold laws and rules to gain social approval or maintain social order." },
          { name: "Postconventional Morality", definition: "(Adolescence and beyond) Actions reflect belief in basic rights and self-defined ethical principles. Abstract reasoning required." }
        ],
      },
      {
        name: "Criticisms of Kohlberg's Theory",
        definition: "Critiques include potential cultural bias (emphasizing individualism), gender bias (Carol Gilligan argued it under-values female 'ethic of care'), and focusing only on moral thinking, not actual behavior.",
        significance: "Highlights limitations and alternative perspectives on moral development.",
      },
      {
        name: "Social Development in Adolescence (Erik Erikson's Stages - cont.)",
        definition: "Focus shifts to forming identity.",
        significance: "Key psychosocial tasks of adolescence and young adulthood.",
        subtypes: [
          { name: "Identity vs. Role Confusion", definition: "(Adolescence: teen years into 20s) Task is to test roles and integrate them to form a single identity, or become confused about who they are." },
          { name: "Intimacy vs. Isolation", definition: "(Young adulthood: 20s to early 40s) Task is to form close, loving relationships, or feel socially isolated." }
        ],
      },
       {
        name: "Identity vs. Role Confusion",
        definition: "(Erikson: Adolescence) Teenagers work at refining a sense of self by testing roles and then integrating them to form a single, coherent identity, or they become confused about who they are.",
        significance: "Central psychosocial task of adolescence.",
       },
      {
        name: "Identity",
        definition: "Our sense of self; according to Erikson, the adolescent's task is to solidify a sense of self by testing and integrating various roles.",
        significance: "A key achievement of adolescence.",
      },
      {
        name: "Social Identity",
        definition: "The \"we\" aspect of our self-concept; the part of our answer to \"Who am I?\" that comes from our group memberships.",
        example: "Identifying as part of a specific ethnic group, sports team, or school club.",
        significance: "Becomes increasingly important during adolescence.",
      },
       {
        name: "Intimacy vs. Isolation",
        definition: "(Erikson: Young Adulthood) Young adults struggle to form close relationships and gain the capacity for intimate love, or they feel socially isolated.",
        significance: "Central psychosocial task of early adulthood.",
       },
      {
        name: "Parent and Peer Influence",
        definition: "During adolescence, peer influence typically increases, particularly for immediate social preferences, while parental influence remains important for long-term values, education, and career choices.",
        significance: "Navigating relationships with both parents and peers is key.",
      },
    ],
  },
  {
    title: "Topic 6.5: Adulthood and Aging",
    terms: [
      {
        name: "Emerging Adulthood",
        definition: "A period from about age 18 to the mid-twenties, when many in Western cultures are no longer adolescents but have not yet achieved full independence as adults. Characterized by identity exploration, instability, self-focus, feeling in-between.",
        significance: "Recognizes a distinct developmental phase in modern industrialized societies.",
      },
      {
        name: "Physical Development in Adulthood",
        definition: "Physical abilities generally peak in early adulthood, followed by gradual decline in middle adulthood, and more pronounced decline in late adulthood.",
        significance: "Understanding normative physical changes helps distinguish aging from disease.",
        subtypes: [
           { name: "Early Adulthood", definition: "(~20s-30s) Peak physical condition (strength, reaction time, sensory acuity)." },
           { name: "Middle Adulthood", definition: "(~40s-65) Gradual physical decline becomes more noticeable. For women, menopause (end of menstruation) occurs, typically around age 50." },
           { name: "Late Adulthood", definition: "(65+) Continued physical decline; sensory abilities (vision, hearing, smell) diminish; immune system weakens (though more antibodies accumulated); brain atrophy occurs, leading to slower processing speed. Exercise can slow aging effects." }
        ],
      },
      {
        name: "Menopause",
        definition: "The time of natural cessation of menstruation; also refers to the biological changes a woman experiences as her ability to reproduce declines, usually occurring around age 50.",
        significance: "Significant biological event in middle adulthood for women.",
      },
      {
        name: "Cognitive Development in Adulthood",
        definition: "Changes in cognitive abilities across adulthood, including memory and intelligence.",
        significance: "Some abilities decline while others remain stable or increase.",
      },
      {
        name: "Memory in Adulthood",
        definition: "Recall memory (retrieving information without cues) tends to decline more with age than recognition memory (identifying previously learned items). Prospective memory (remembering to do things) can also decline without cues.",
        significance: "Shows differential aging effects on different types of memory.",
      },
      {
        name: "Intelligence in Adulthood",
        definition: "How intelligence changes with age depends on the type of intelligence and research method.",
        significance: "Cross-sectional studies initially suggested steep decline (due to cohort effects), while longitudinal studies show more stability, especially for crystallized intelligence.",
      },
      {
        name: "Crystallized Intelligence",
        definition: "Our accumulated knowledge and verbal skills; tends to increase with age or remain stable.",
        example: "Vocabulary, general knowledge.",
        significance: "Reflects accumulated experience.",
      },
      {
        name: "Fluid Intelligence",
        definition: "Our ability to reason speedily and abstractly; tends to decrease during late adulthood.",
        example: "Solving novel logic problems, processing speed.",
        significance: "Reflects processing capacity.",
      },
      {
        name: "Social Development in Adulthood (Erikson's Stages - cont.)",
        definition: "Focus shifts to contribution and life reflection.",
        significance: "Key psychosocial tasks of middle and late adulthood.",
        subtypes: [
          { name: "Generativity vs. Stagnation", definition: "(Middle adulthood: 40s to 60s) Task is to discover a sense of contributing to the world (e.g., through family, work), or they may feel a lack of purpose." },
          { name: "Integrity vs. Despair", definition: "(Late adulthood: late 60s and up) Task is reflecting on their lives, older adults may feel a sense of satisfaction or failure." }
        ],
      },
       {
        name: "Generativity vs. Stagnation",
        definition: "(Erikson: Middle Adulthood) People discover a sense of contributing to the world, usually through family and work, or they may feel a lack of purpose.",
        significance: "Focus on legacy and contribution.",
       },
       {
        name: "Integrity vs. Despair",
        definition: "(Erikson: Late Adulthood) Reflecting on their lives, older adults may feel a sense of satisfaction or failure.",
        significance: "Life review and acceptance.",
       },
      {
        name: "Social Clock",
        definition: "The culturally preferred timing of social events such as marriage, parenthood, and retirement.",
        significance: "Influences social expectations and life satisfaction depending on whether one feels 'on time' or 'off time'. Varies across cultures and eras.",
      },
      {
        name: "Well-Being Across the Lifespan",
        definition: "Research suggests that overall life satisfaction tends to remain high across the lifespan. Positive feelings tend to grow after midlife, and negative feelings subside.",
        significance: "Challenges stereotypes of aging as solely a period of decline and unhappiness.",
      },
    ],
  },
   { // Renumbering to 6.6 based on AP CED structure, though user input was 6.7
    title: "Topic 6.7: Gender and Sexual Orientation", // User's numbering kept for reference, common topic placement
    terms: [
      {
        name: "Sex",
        definition: "The biologically influenced characteristics by which people define male and female (e.g., chromosomes, hormones, anatomy).",
        significance: "Biological category, distinct from gender.",
      },
      {
        name: "Gender",
        definition: "The socially influenced characteristics by which people define boy, girl, man, and woman. The psychological sense of being male, female, or another identity.",
        significance: "Social and psychological construct, influenced by culture and identity.",
      },
      {
        name: "Aggression",
        definition: "Any physical or verbal behavior intended to harm someone physically or emotionally.",
        significance: "Gender differences exist on average, with men tending towards more physical aggression.",
      },
      {
        name: "Relational Aggression",
        definition: "An act of aggression (physical or verbal) intended to harm a person's relationship or social standing.",
        example: "Spreading rumors, social exclusion.",
        significance: "Women are slightly more likely than men to commit relational aggression.",
      },
      {
        name: "Gender Differences",
        definition: "Observed average differences between males and females in traits, attitudes, or behaviors. Important to note large individual variation and overlap between genders.",
        significance: "Often small; origins debated (nature vs. nurture).",
      },
      {
        name: "Role",
        definition: "A set of expectations (norms) about a social position, defining how those in the position ought to behave.",
        significance: "Influences behavior in specific social contexts.",
      },
      {
        name: "Gender Role",
        definition: "A set of expected behaviors, attitudes, and traits for males or for females within a given culture.",
        example: "Traditional expectations about careers, domestic tasks, or emotional expression.",
        significance: "Culturally defined; vary across time and place.",
      },
      {
        name: "Gender Identity",
        definition: "Our sense of being male, female, some combination of the two, or neither.",
        significance: "Internal sense of self, distinct from biological sex or gender expression.",
      },
      {
        name: "Gender Typing",
        definition: "The acquisition of a traditional masculine or feminine role. Children gravitate towards what feels right to them.",
        significance: "Process by which children learn and adopt gender roles.",
      },
      {
        name: "Social Learning Theory",
        definition: "The theory that we learn social behavior, including gender roles, by observing and imitating and by being rewarded or punished.",
        example: "A boy praised for 'acting like a man'; a girl imitating her mother putting on makeup.",
        significance: "Emphasizes observational learning and reinforcement in gender development.",
      },
      {
        name: "Gender Schema Theory",
        definition: "The theory that children learn from their cultures a concept of what it means to be male and female and that they adjust their behavior accordingly.",
        example: "Children form schemas for 'boy things' and 'girl things' and use these schemas to organize their world and guide their behavior.",
        significance: "Combines social learning with cognition; emphasizes children's active role in organizing gender information.",
      },
      {
        name: "Androgyny",
        definition: "Displaying both traditional masculine and feminine psychological characteristics.",
        significance: "Challenges rigid gender roles; sometimes associated with greater flexibility.",
      },
      {
        name: "Transgender",
        definition: "An umbrella term describing people whose gender identity or expression differs from that associated with their birth-assigned sex.",
        significance: "Highlights distinction between biological sex and gender identity.",
      },
      {
        name: "Sexual Orientation",
        definition: "Our enduring sexual attraction toward members of our own sex (homosexual orientation), the other sex (heterosexual orientation), both sexes (bisexual orientation), or neither sex (asexual).",
        significance: "A fundamental aspect of identity; distinct from gender identity.",
      },
      {
        name: "Origins of Sexual Orientation",
        definition: "Research indicates biological factors play a significant role, including genetic influences, prenatal hormone exposure, and potential brain differences. Evidence does not support environmental factors like parenting styles or early sexual experiences as determinants.",
        significance: "Understanding origins impacts social attitudes and therapy approaches (conversion therapy ineffective/harmful). Orientation is generally considered not a matter of choice.",
      },
    ],
  },
   { // Renumbering to 6.7 based on AP CED structure, though user input was 6.8
    title: "Topic 6.8: Death and Dying", // User's numbering kept for reference, common topic placement
    terms: [
       {
        name: "Death and Dying",
        definition: "The end of the lifespan, involving biological, psychological, and social aspects.",
        significance: "Understanding perspectives on death and the grieving process.",
       },
       {
        name: "Kübler-Ross Stages of Grief/Dying",
        definition: "A model proposing five stages people may go through when facing death or loss: Denial, Anger, Bargaining, Depression, Acceptance.",
        significance: "Historically influential but widely criticized for lacking empirical support as rigid, sequential stages. Grief is now understood as a highly variable and individual process, not necessarily following these stages in order.",
        keyFigure: "Elisabeth Kübler-Ross"
      },
    ],
  }
]

const unit7Topics = [
  {
    title: "Unit Overview", // Added Unit Overview as a pseudo-topic for context
    terms: [
      {
        name: "Unit 7 Overview",
        definition: "This unit explores the forces that energize and direct behavior (motivation), the complex experience of feelings (emotion), the impact of stress, and the study of individual differences in characteristic patterns of thinking, feeling, and acting (personality).",
        example: "", // No specific example for the overview itself
        significance: "Integrates key psychological concepts related to internal states, external behaviors, health, and individual differences.",
      }
    ]
  },
  {
    title: "Topic 7.1: Theories of Motivation",
    terms: [
      {
        name: "Motivation",
        definition: "A need or desire that energizes and directs behavior.",
        example: "Hunger motivating someone to seek food; desire for achievement driving study habits; thirst motivating drinking.",
        significance: "Explains the 'why' behind behavior – why we initiate, select, direct, and persist in specific actions.",
      },
      {
        name: "Instinct Theory (Evolutionary Perspective)",
        definition: "The theory that behavior is driven by unlearned, genetically programmed instincts (fixed patterns common to a species). Genes predispose species-typical behaviors.",
        example: "Infants' rooting and sucking reflexes; salmon returning upstream to spawn.",
        significance: "Highlights the role of biology and genetics in behavior, although it explains fewer human behaviors than animal behaviors.",
      },
      {
        name: "Instinct",
        definition: "A complex, unlearned behavior that is rigidly patterned throughout a species.",
        example: "Birds building nests; spiders spinning webs.",
        significance: "A key concept in early theories of motivation, though less emphasized now for explaining complex human behaviors.",
      },
      {
        name: "Drive-Reduction Theory",
        definition: "The theory that a physiological need creates an aroused psychological tension state (a drive) that motivates an organism to satisfy the need and restore homeostasis.",
        example: "Need (food) -> Drive (hunger) -> Drive-Reducing Behavior (eating).",
        significance: "Explains motivation for basic biological needs aimed at maintaining internal balance (homeostasis).",
      },
      {
        name: "Need",
        definition: "A physiological requirement essential for survival.",
        example: "Need for food, water, warmth.",
        significance: "The biological basis that triggers a drive in drive-reduction theory.",
      },
      {
        name: "Drive",
        definition: "An aroused, motivated state of tension created by a physiological need.",
        example: "Hunger, thirst.",
        significance: "The psychological consequence of a need, pushing the organism to act.",
      },
      {
        name: "Homeostasis",
        definition: "A tendency to maintain a balanced or constant internal state; the regulation of any aspect of body chemistry (like blood glucose) around a particular level.",
        example: "Body temperature regulation; maintaining adequate blood sugar levels.",
        significance: "The goal of drive reduction; maintaining internal equilibrium is crucial for survival.",
      },
      {
        name: "Incentive",
        definition: "A positive or negative environmental stimulus that motivates behavior; 'pulls' us toward a goal.",
        example: "Smell of baking bread (positive incentive); threat of punishment (negative incentive).",
        significance: "Explains how external factors, not just internal drives, influence motivation. Complements drive-reduction theory.",
      },
      {
        name: "Arousal Theory",
        definition: "The theory that humans are motivated to seek an optimal level of arousal (physiological and psychological activation/stimulation). We seek to increase arousal when bored and decrease it when overstimulated.",
        example: "Seeking excitement through roller coasters or challenging tasks when under-aroused; seeking quiet when overwhelmed.",
        significance: "Explains curiosity, exploration, and risk-taking behaviors not easily accounted for by drive reduction.",
      },
      {
        name: "Yerkes-Dodson Law",
        definition: "The principle that performance increases with arousal only up to a point, beyond which performance decreases. Optimal arousal level is lower for complex/difficult tasks and higher for simple/well-learned tasks.",
        example: "Slight anxiety might improve performance on an easy task, but high anxiety hinders performance on a difficult exam.",
        significance: "Describes the complex relationship between arousal level and performance effectiveness.",
      },
      {
        name: "Maslow's Hierarchy of Needs",
        definition: "Abraham Maslow's pyramid of human needs, beginning at the base with physiological needs that must first be satisfied before higher-level safety needs and then psychological needs become active.",
        example: "One must satisfy hunger (physiological) before focusing on finding stable housing (safety) or building friendships (belongingness).",
        significance: "Provides a framework for understanding the prioritization of human motivations, from basic survival to psychological growth.",
      },
      // Note: Levels are integrated into the Hierarchy definition and Self-Actualization is below.
       {
        name: "Self-Actualization",
        definition: "According to Maslow, one of the ultimate psychological needs that arises after basic physical and psychological needs are met; the motivation to fulfill one's full potential.",
        example: "An artist striving to create masterworks; an individual pursuing personal growth and understanding.",
        significance: "Represents the pinnacle of human motivation in Maslow's hierarchy, focusing on growth and meaning.",
      },
       {
        name: "Self-Transcendence",
        definition: "(Added later by Maslow) The striving for identity, meaning, and purpose beyond the self.",
        example: "Focusing on spiritual goals, altruism, or contributing to a cause larger than oneself.",
        significance: "Represents a level beyond self-actualization, emphasizing connection to something greater.",
      }
    ],
  },
  {
    title: "Topic 7.2: Specific Topics in Motivation",
    terms: [
      {
        name: "Hunger Motivation",
        definition: "The drive that living beings have to eat as a means of satisfying physiological needs and maintaining homeostasis.",
        example: "Feeling stomach pangs, thinking about food, seeking out and consuming food when blood sugar is low.",
        significance: "Essential survival motivation involving complex interplay of physiological factors (glucose, hypothalamus, hormones like ghrelin, leptin) and psychological factors (taste preferences, culture, stress, situational cues).",
      },
       {
        name: "Glucose",
        definition: "The form of sugar that circulates in the blood and provides the major source of energy for body tissues. Low levels trigger hunger.",
        example: "Feeling weak or hungry when blood sugar drops.",
        significance: "A key physiological signal monitored by the brain to regulate hunger.",
      },
      {
        name: "Hypothalamus",
        definition: "Brain structure involved in regulating hunger and satiety. The lateral hypothalamus signals hunger ('ON' switch), while the ventromedial hypothalamus signals fullness ('OFF' switch). Appetite hormones interact with these areas.",
        example: "Damage to the ventromedial hypothalamus can lead to overeating.",
        significance: "Central control center for hunger and eating behavior.",
      },
      {
        name: "Appetite Hormones",
        definition: "Hormones influencing appetite and energy balance.",
        example: "Insulin (controls glucose), Ghrelin (secreted by empty stomach; increases hunger), Orexin (hunger-triggering hormone from hypothalamus), Leptin (secreted by fat cells; decreases hunger), PYY (digestive tract hormone; decreases hunger).",
        significance: "Chemical messengers providing feedback about nutritional status and influencing eating behavior.",
      },
      {
        name: "Set Point Theory",
        definition: "The theory that an individual's 'weight thermostat' is supposedly set. When the body falls below this weight, increased hunger and a lowered metabolic rate may act to restore the lost weight. (Modern view often prefers 'settling point' which acknowledges environmental factors).",
        example: "Difficulty maintaining weight loss due to the body trying to return to its established weight range.",
        significance: "Suggests biological mechanisms resist deviations from a stable body weight, influencing hunger and metabolism.",
      },
      {
        name: "Basal Metabolic Rate (BMR)",
        definition: "The body's resting rate of energy expenditure needed to maintain basic body functions.",
        example: "The calories burned just by lying still and keeping organs functioning.",
        significance: "Influences energy balance and weight management; can change with age, diet, and activity.",
      },
      {
        name: "Sexual Motivation",
        definition: "The drive to engage in sexual activity, influenced by physiological factors (hormones, brain activity), psychological factors (stimuli, fantasy), and social-cultural factors.",
        example: "Desire for intimacy, response to erotic stimuli.",
        significance: "Essential for reproduction, but also plays a major role in relationships and well-being.",
      },
       {
        name: "Sex Hormones",
        definition: "Hormones such as estrogens (more prevalent in females) and testosterone (more prevalent in males) that influence sexual development and activate sexual behavior.",
        example: "Testosterone levels influencing sexual interest in both men and women.",
        significance: "Physiological drivers of sexual motivation, although their influence is often intertwined with psychological factors in humans.",
      },
       {
        name: "Sexual Response Cycle",
        definition: "The four stages of sexual responding described by Masters and Johnson: excitement, plateau, orgasm, and resolution.",
        example: "The predictable sequence of physiological changes during sexual activity.",
        significance: "Provides a framework for understanding the physiological progression of human sexual response.",
      },
       {
        name: "Refractory Period",
        definition: "A resting period after orgasm, during which a male cannot achieve another orgasm.",
        example: "The time delay before a man can become sexually aroused again after climax.",
        significance: "A key difference in the male sexual response cycle compared to the female cycle.",
      },
      {
        name: "Affiliation Need (Need to Belong)",
        definition: "The basic human motivation to build relationships and feel part of a group.",
        example: "Seeking friendships, joining clubs, feeling distress when excluded.",
        significance: "Fundamental human need with evolutionary roots; belonging enhances survival, well-being, and self-esteem. Ostracism (social exclusion) is psychologically painful.",
      },
       {
        name: "Ostracism",
        definition: "Social exclusion or deliberate ignoring of an individual or group.",
        example: "Being given the 'silent treatment'; being excluded from social activities.",
        significance: "Activates brain areas associated with physical pain; threatens the need to belong and can cause significant distress.",
      },
      {
        name: "Achievement Motivation",
        definition: "A desire for significant accomplishment; for mastery of skills or ideas; for control; and for attaining a high standard.",
        example: "Working hard to get good grades; training diligently to win a competition; striving for excellence in one's career.",
        significance: "Drives individuals to set challenging goals and persist in the face of obstacles. Identified by Murray, further studied by McClelland.",
      }
    ],
  },
  {
    title: "Topic 7.3: Theories of Emotion",
    terms: [
      {
        name: "Emotion",
        definition: "A complex response of the whole organism involving: (1) physiological arousal (e.g., heart pounding), (2) expressive behaviors (e.g., quickened pace, facial expressions), and (3) conscious experience (thoughts and feelings).",
        example: "Feeling fear involves a racing heart, wide eyes, and the conscious thought 'I'm scared.'",
        significance: "Fundamental aspect of human experience, influencing motivation, decision-making, social interaction, and survival.",
      },
      {
        name: "James-Lange Theory",
        definition: "The theory that our experience of emotion is our awareness of our physiological responses to an emotion-arousing stimulus. (Stimulus -> Arousal -> Emotion).",
        example: "We feel sorry because we cry; angry because we strike; afraid because we tremble.",
        significance: "Emphasizes the body's role in generating emotions; suggests distinct physiological patterns for each emotion (though debated).",
      },
      {
        name: "Cannon-Bard Theory",
        definition: "The theory that an emotion-arousing stimulus simultaneously triggers (1) physiological responses and (2) the subjective experience of emotion. (Stimulus -> Arousal + Emotion at the same time).",
        example: "Seeing a bear triggers both physiological arousal (heart pounding) and the conscious feeling of fear simultaneously and independently.",
        significance: "Challenges James-Lange by arguing physiological responses are too similar and slow to cause distinct emotions; highlights role of thalamus/brain.",
      },
      {
        name: "Schachter-Singer Two-Factor Theory",
        definition: "The theory that to experience emotion one must (1) be physically aroused and (2) cognitively label the arousal based on the context. (Stimulus -> Arousal + Cognitive Label -> Emotion).",
        example: "If physiologically aroused (e.g., after exercise) and in a happy crowd, you might label the arousal as happiness; in an angry crowd, as anger. Supported by the spillover effect.",
        significance: "Emphasizes the crucial role of cognitive interpretation/appraisal in determining which emotion is experienced.",
      },
       {
        name: "Spillover Effect",
        definition: "The tendency for arousal from one event to influence (spill over into) our response to the next event.",
        example: "Getting worked up during an argument and then feeling angrier at unrelated minor annoyances afterward.",
        significance: "Supports the Two-Factor Theory by showing that arousal can be interpreted differently depending on the context/label applied.",
      },
      {
        name: "Zajonc; LeDoux Theory",
        definition: "The theory that some emotional responses (especially simple likes, dislikes, and fears) occur instantly, without conscious appraisal or cognitive labeling. Suggests a direct neural pathway ('low road') to the amygdala, bypassing the cortex.",
        example: "Immediately jumping at a sudden loud noise before consciously identifying it as harmless.",
        significance: "Highlights that not all emotions require complex cognitive interpretation; some are fast, automatic responses.",
      },
      {
        name: "Lazarus Theory",
        definition: "The theory that cognitive appraisal ('Is it dangerous or not?')—sometimes without our awareness—defines emotion. Appraisal precedes both the emotional response and physiological arousal.",
        example: "Hearing a rustling sound, appraising it as potentially dangerous (a threat), then feeling fear and physiological arousal.",
        significance: "Reasserts the primacy of cognition, suggesting even seemingly instant emotional reactions involve some form of (often unconscious) appraisal.",
      },
       {
        name: "Role of Autonomic Nervous System (ANS)",
        definition: "The ANS controls physiological arousal during emotions. The sympathetic division arouses (fight-or-flight), and the parasympathetic division calms (rest-and-digest).",
        example: "Sympathetic activation: pupils dilate, heart rate increases, digestion slows. Parasympathetic activation: opposite effects.",
        significance: "Underlies the physiological component of emotion. While many emotions share similar arousal patterns, subtle physiological differences exist. Measured by polygraphs.",
      },
       {
        name: "Polygraph",
        definition: "A machine, commonly used in attempts to detect lies, that measures several physiological responses (such as perspiration, heart rate, and breathing changes) accompanying emotion.",
        example: "Used in some law enforcement investigations.",
        significance: "Measures autonomic arousal, not specifically lies. Its validity is highly questionable as arousal can be caused by many factors (anxiety, irritation) besides guilt.",
      }
    ],
  },
   {
    title: "Topic 7.4: Stress and Coping",
    terms: [
      {
        name: "Stress",
        definition: "The process by which we perceive and respond to certain events, called stressors, that we appraise as threatening or challenging.",
        example: "Feeling overwhelmed by exams; reacting to a sudden job loss.",
        significance: "A common psychological and physiological process that can be adaptive (motivating action) or harmful (if chronic or overwhelming).",
      },
      {
        name: "Stressors",
        definition: "Events or situations perceived as threatening, challenging, or demanding.",
        example: "Major categories include: Catastrophes (large-scale disasters), Significant Life Changes (moving, marriage, death of loved one), Daily Hassles (traffic jams, arguments, deadlines).",
        significance: "The environmental triggers that initiate the stress process.",
      },
       {
        name: "Stress Appraisal",
        definition: "The cognitive interpretation of a stressor and our resources to cope with it. Appraising a stressor as a threat (something we cannot handle) or a challenge (something we can overcome) influences the intensity and nature of the stress response.",
        example: "Viewing an upcoming presentation as a threat vs. viewing it as an opportunity to showcase skills.",
        significance: "Highlights the subjective nature of stress; how we interpret an event is often more important than the event itself.",
      },
      {
        name: "Cannon's Fight-or-Flight Response",
        definition: "Walter Cannon's term for the initial, rapid response to stress involving activation of the sympathetic nervous system and release of adrenal hormones (epinephrine/norepinephrine). Prepares the body for physical action.",
        example: "Increased heart rate, respiration, blood flow to muscles when facing a perceived danger.",
        significance: "Adaptive evolutionary response for dealing with acute physical threats.",
      },
      {
        name: "Selye's General Adaptation Syndrome (GAS)",
        definition: "Hans Selye's concept of the body's adaptive response to stress in three phases: 1. Alarm Reaction (initial shock, fight-or-flight activation), 2. Resistance (coping with the stressor, resources mobilized), 3. Exhaustion (resources depleted, vulnerability to illness increases).",
        example: "Initial panic (alarm), followed by focused effort to study for weeks (resistance), leading to illness after exams end (exhaustion).",
        significance: "Describes the physiological progression of the stress response, especially under prolonged stress, highlighting the link between chronic stress and health problems.",
      },
      {
        name: "Tend-and-Befriend Response",
        definition: "Under stress, people (especially women) often provide support to others (tend) and bond with and seek support from others (befriend). Linked to the hormone oxytocin.",
        example: "Seeking out friends for comfort during a stressful time; protecting children in a crisis.",
        significance: "Alternative stress response pattern, particularly noted in females, emphasizing social connection over fight-or-flight.",
      },
      {
        name: "Psychoneuroimmunology (PNI)",
        definition: "The study of how psychological factors (like stress), neural processes, and endocrine processes (hormones) together affect the immune system and resulting health.",
        example: "Research showing stress hormones suppress lymphocyte activity.",
        significance: "Provides scientific basis for understanding mind-body interactions and how stress impacts physical health and vulnerability to illness.",
      },
      // Note: Immune and Cardiovascular effects are integrated into PNI/Chronic Stress.
      {
        name: "Health Consequences of Chronic Stress",
        definition: "Prolonged or excessive stress can negatively impact health by weakening the immune system (making individuals more vulnerable to infections, slowing healing) and increasing risk for cardiovascular problems (like high blood pressure and coronary heart disease).",
        example: "Increased colds during exam periods; higher heart attack rates among chronically stressed individuals.",
        significance: "Explains the link between psychological stress and major physical health issues.",
       },
      {
        name: "Type A Personality",
        definition: "(Friedman & Rosenman's term) Personality type characterized by competitiveness, impatience, time urgency, verbal aggressiveness, and anger/hostility.",
        example: "Someone who is always rushing, easily angered in traffic, works intensely.",
        significance: "The anger/hostility component of Type A is strongly linked to an increased risk of coronary heart disease.",
      },
      {
        name: "Type B Personality",
        definition: "(Friedman & Rosenman's term) Personality type characterized by being easygoing, relaxed, patient, and less driven by time urgency.",
        example: "Someone who is calm, patient in lines, takes time to enjoy leisure.",
        significance: "Associated with lower risk of heart disease compared to Type A.",
      },
      {
        name: "Coping",
        definition: "Alleviating stress using emotional, cognitive, or behavioral methods.",
        example: "Studying for a test (problem-focused), talking to a friend about anxiety (emotion-focused).",
        significance: "Refers to the strategies individuals use to manage stressors and reduce their negative impact.",
      },
      {
        name: "Problem-Focused Coping",
        definition: "Attempting to alleviate stress directly by changing the stressor or the way we interact with that stressor.",
        example: "Facing a conflict head-on; studying more for a difficult test; seeking information to solve a problem.",
        significance: "Generally used when we feel a sense of control over the situation; aims to tackle the root cause of the stress.",
      },
      {
        name: "Emotion-Focused Coping",
        definition: "Attempting to alleviate stress by avoiding or ignoring a stressor and attending to emotional needs related to our stress reaction.",
        example: "Seeking emotional support from friends; distracting oneself; meditating; journaling feelings.",
        significance: "Generally used when we believe we cannot change the situation; aims to manage the emotional distress caused by the stressor.",
      },
      {
        name: "Perceived Control",
        definition: "The belief that one has control over their environment and potential stressors, rather than feeling helpless.",
        example: "Believing you can influence your work environment vs. feeling powerless.",
        significance: "Higher perceived control is associated with lower stress levels, better coping, and improved health outcomes.",
      },
      {
        name: "Optimism",
        definition: "The general tendency to expect positive outcomes.",
        example: "Expecting to succeed on a task; viewing challenges as temporary.",
        significance: "Associated with better coping, better health, and greater well-being compared to pessimism.",
      },
      {
        name: "Social Support",
        definition: "Feeling liked, affirmed, and encouraged by intimate friends and family.",
        example: "Having close friends to talk to; belonging to supportive groups.",
        significance: "Strong predictor of health and longevity; buffers stress, promotes better coping.",
      },
      {
        name: "Managing Stress",
        definition: "Utilizing various techniques to reduce stress and promote well-being.",
        example: "Includes strategies like Aerobic Exercise (reduces stress, depression, anxiety), Relaxation/Meditation (reduces arousal, promotes calm), and potentially the Faith Factor (religiously active people tend to live longer, possibly due to healthy behaviors, social support, positive emotions promoted by faith communities).",
        significance: "Emphasizes proactive strategies for improving stress resilience and overall health.",
      },
    ],
  },
  {
    title: "Topic 7.5: Introduction to Personality",
    terms: [
       {
        name: "Personality",
        definition: "An individual's characteristic pattern of thinking, feeling, and acting.",
        example: "Being consistently outgoing and friendly; tending to worry often; having a generally optimistic outlook.",
        significance: "Captures the unique and relatively stable ways individuals differ from one another. Studied from various perspectives (Psychodynamic, Humanistic, Trait, Social-Cognitive).",
      },
    ],
  },
   {
    title: "Topic 7.6: Psychoanalytic Theories of Personality",
    terms: [
       {
        name: "Psychodynamic Theories",
        definition: "Theories that view personality with a focus on the unconscious mind and the importance of childhood experiences.",
        example: "Freud's psychoanalysis, Neo-Freudian theories (Adler, Horney, Jung).",
        significance: "Descended from Freud's work, emphasizing internal conflicts, unconscious drives, and early development in shaping personality.",
      },
      {
        name: "Psychoanalysis",
        definition: "Sigmund Freud's theory of personality that attributes thoughts and actions to unconscious motives and conflicts; also, the therapeutic technique used in treating psychological disorders by seeking to expose and interpret unconscious tensions.",
        example: "Using free association or dream analysis to uncover hidden desires or conflicts.",
        significance: "Hugely influential historical perspective, introduced concepts like the unconscious, id/ego/superego, defense mechanisms, and psychosexual stages.",
      },
      {
        name: "Unconscious",
        definition: "According to Freud, a reservoir of mostly unacceptable thoughts, wishes, feelings, and memories. According to contemporary psychologists, information processing of which we are unaware.",
        example: "Freud: Repressed desires or traumatic memories. Contemporary: Automatic processing, implicit memories.",
        significance: "Central concept in psychodynamic theories; modern view acknowledges unconscious processing but differs from Freud's emphasis on repressed content.",
      },
      {
        name: "Free Association",
        definition: "In psychoanalysis, a method of exploring the unconscious in which the person relaxes and says whatever comes to mind, no matter how trivial or embarrassing.",
        example: "A patient talking stream-of-consciousness style about thoughts and feelings.",
        significance: "Freud believed this bypassed the ego's censorship, revealing unconscious material.",
      },
      {
        name: "Id",
        definition: "According to Freud, the unconscious part of personality that contains basic instinctual drives (sexual and aggressive); operates on the pleasure principle, demanding immediate gratification.",
        example: "A newborn crying out for satisfaction; wanting to immediately eat a tempting cake.",
        significance: "The primitive, entirely unconscious source of psychic energy in Freud's model.",
      },
      {
        name: "Ego",
        definition: "According to Freud, the largely conscious, 'executive' part of personality that mediates among the demands of the id, superego, and reality. Operates on the reality principle.",
        example: "Mediating the id's desire for cake with the reality that it's polite to wait until dessert time.",
        significance: "Seeks to gratify the id's impulses realistically and ways that bring long-term pleasure; manages defense mechanisms.",
      },
      {
        name: "Superego",
        definition: "According to Freud, the part of personality that represents internalized ideals and provides standards for judgment (the conscience) and for future aspirations. Moral compass.",
        example: "Feeling guilty after lying; striving to live up to perceived parental or societal standards.",
        significance: "Develops around age 4-5, incorporating societal rules and constraints; strives for perfection, often opposing the id.",
      },
      {
        name: "Psychosexual Stages",
        definition: "According to Freud, the childhood stages of development (oral, anal, phallic, latency, genital) during which the id's pleasure-seeking energies focus on distinct erogenous zones.",
        example: "Fixation at the oral stage might lead to smoking or overeating in adulthood.",
        significance: "Freud's controversial theory suggesting early childhood experiences and conflicts shape adult personality.",
      },
       { name: "Oral Stage", definition: "(0-18 months) Pleasure centers on the mouth—sucking, biting, chewing.", example: "Weaning conflict.", significance: "First psychosexual stage; potential fixation related to dependency or aggression." },
       { name: "Anal Stage", definition: "(18-36 months) Pleasure focuses on bowel and bladder elimination; coping with demands for control.", example: "Toilet training conflicts.", significance: "Potential fixation leads to anal-retentive (orderly) or anal-expulsive (messy) traits." },
       { name: "Phallic Stage", definition: "(3-6 years) Pleasure zone is the genitals; coping with incestuous sexual feelings (Oedipus/Electra complex).", example: "Identifying with same-sex parent.", significance: "Crucial stage for gender identity and superego development." },
       { name: "Latency Stage", definition: "(6 to puberty) A phase of dormant sexual feelings.", example: "Focus on school, peers, hobbies.", significance: "Sexual energy is repressed or channeled into socially acceptable activities." },
       { name: "Genital Stage", definition: "(puberty on) Maturation of sexual interests.", example: "Developing mature romantic relationships.", significance: "Final stage; sexual energy directed towards appropriate targets." },
      {
        name: "Oedipus Complex",
        definition: "According to Freud, a boy's sexual desires toward his mother and feelings of jealousy and hatred for the rival father. (Analogous Electra complex for girls).",
        example: "A young boy expressing desire to marry his mother.",
        significance: "Central conflict of the phallic stage; its resolution through identification is key to superego development.",
      },
      {
        name: "Identification",
        definition: "According to Freud, the process by which children incorporate their parents' values into their developing superegos. Resolves the Oedipus complex.",
        example: "A boy starts acting more like his father.",
        significance: "Crucial for superego formation and development of gender identity.",
      },
      {
        name: "Fixation",
        definition: "According to Freud, a lingering focus of pleasure-seeking energies at an earlier psychosexual stage, in which conflicts were unresolved.",
        example: "Someone fixated at the oral stage might exhibit excessive smoking or dependency.",
        significance: "Explains how unresolved early conflicts can influence adult personality traits.",
      },
      {
        name: "Defense Mechanisms",
        definition: "In psychoanalytic theory, the ego's protective methods of reducing anxiety by unconsciously distorting reality.",
        example: "Repression, regression, reaction formation, projection, rationalization, displacement, sublimation, denial.",
        significance: "Strategies used to cope with conflict between the id, ego, and superego; protect self-esteem but involve self-deception.",
      },
       { name: "Repression", definition: "The basic defense mechanism that banishes anxiety-arousing thoughts, feelings, and memories from consciousness.", example: "Forgetting details of a traumatic event.", significance: "Underlies all other defense mechanisms; validity and extent are debated." },
       { name: "Regression", definition: "Retreating to a more infantile psychosexual stage, where some psychic energy remains fixated.", example: "A stressed adult starting to suck their thumb.", significance: "Coping with anxiety by reverting to earlier behaviors." },
       { name: "Reaction Formation", definition: "Switching unacceptable impulses into their opposites.", example: "Repressing angry feelings, a person displays exaggerated friendliness.", significance: "Behaving in a way directly counter to unconscious desires." },
       { name: "Projection", definition: "Disguising one's own threatening impulses by attributing them to others.", example: "A thief thinks everyone else is a thief ('projecting').", significance: "Seeing one's own flaws in others." },
       { name: "Rationalization", definition: "Offering self-justifying explanations in place of the real, more threatening unconscious reasons for one's actions.", example: "A habitual drinker says she drinks with her friends 'just to be sociable.'", significance: "Creating logical excuses for unacceptable behavior." },
       { name: "Displacement", definition: "Shifting sexual or aggressive impulses toward a more acceptable or less threatening object or person.", example: "Kicking the dog after being sent to your room.", significance: "Redirecting impulses onto a safer target." },
       { name: "Sublimation", definition: "Transferring of unacceptable impulses into socially valued motives.", example: "A person with aggressive urges becomes a surgeon.", significance: "Channeling potentially harmful drives into constructive activities (considered a mature defense)." },
       { name: "Denial", definition: "Refusing to believe or even perceive painful realities.", example: "Denying evidence of a loved one's affair.", significance: "Protecting oneself from unpleasant reality by rejecting it." },
      {
        name: "Neo-Freudians",
        definition: "Psychoanalysts who accepted Freud's basic ideas (id, ego, superego; unconscious; childhood roots; defense mechanisms) but placed more emphasis on the conscious mind's role and/or doubted sex and aggression were all-consuming motives, emphasizing social factors.",
        example: "Alfred Adler, Karen Horney, Carl Jung.",
        significance: "Modified and expanded Freud's theories, leading to diverse psychodynamic perspectives.",
      },
      {
        name: "Alfred Adler",
        definition: "Neo-Freudian who emphasized social tensions (not sexual) in childhood and the drive to overcome feelings of inferiority (inferiority complex). Also studied birth order effects.",
        example: "Focus on striving for superiority and social interest.",
        significance: "Shifted focus from biological drives to social motives and conscious striving.",
      },
      {
        name: "Karen Horney",
        definition: "Neo-Freudian who emphasized childhood anxiety caused by dependence and helplessness, triggering desires for love and security. Countered Freud's concept of 'penis envy' with social explanations for gender differences.",
        example: "Focus on basic anxiety and neurotic needs.",
        significance: "Highlighted social and cultural factors, offered feminist critique of Freud.",
      },
      {
        name: "Carl Jung",
        definition: "Neo-Freudian who emphasized the collective unconscious, a shared reservoir of memory traces (archetypes) from our species' history.",
        example: "Archetypes like the hero, the mother, the shadow appearing in myths and dreams across cultures.",
        significance: "Introduced concepts of collective unconscious and archetypes, highlighting universal themes in human experience.",
      },
      {
        name: "Collective Unconscious",
        definition: "Carl Jung's concept of a shared, inherited reservoir of memory traces from our species' universal experiences.",
        example: "Explains similarities in myths, symbols, and spiritual beliefs across different cultures.",
        significance: "Jung's most distinctive concept, proposing a deeper layer of unconscious shared by all humanity.",
      },
      {
        name: "Archetypes",
        definition: "According to Jung, common reservoir images, symbols, or themes derived from universal human experiences, residing in the collective unconscious.",
        example: "The nurturing Mother, the wise Old Man, the Hero's journey, the Shadow (dark side).",
        significance: "Universal patterns influencing our perceptions, emotions, and behaviors.",
      }
    ],
  },
   {
    title: "Topic 7.7: Behaviorism and Social Cognitive Theories of Personality",
    terms: [
      {
        name: "Behaviorism Perspective (on Personality)",
        definition: "Views personality as a collection of learned behaviors acquired through classical and operant conditioning, reinforcement, punishment, and observation. Focuses on observable behavior rather than internal mental states.",
        example: "A person is outgoing because social interactions have been consistently reinforced.",
        significance: "Emphasizes environmental influences and learning principles in shaping behavior patterns we call personality, but criticized for ignoring cognition.",
      },
      {
        name: "Social-Cognitive Perspective",
        definition: "Views behavior as influenced by the interaction between people's traits (including their thinking, cognition) and their social context (environment). Emphasizes reciprocal determinism.",
        example: "A person's beliefs about their abilities (cognition) influence their choice of activities (behavior), which in turn affects the environments they encounter.",
        significance: "Integrates learning principles (behaviorism) with cognitive processes (thoughts, beliefs, expectations) and social influences. Key figure: Albert Bandura.",
      },
      {
        name: "Reciprocal Determinism",
        definition: "The interacting influences of behavior, internal cognition (personal factors like thoughts and feelings), and environment. Each factor influences and is influenced by the others.",
        example: "A child's hostile thinking (cognition) leads them to act aggressively (behavior), which evokes aggressive responses from peers (environment), reinforcing the hostile thinking.",
        significance: "Bandura's concept highlighting the dynamic interplay between person and situation in shaping personality and behavior.",
      },
      {
        name: "Personal Control",
        definition: "The extent to which we perceive control over our environment and outcomes, rather than feeling helpless.",
        example: "Internal vs. External Locus of Control.",
        significance: "A key personal factor in the social-cognitive perspective; influences motivation, coping, and well-being.",
      },
      {
        name: "Self-Efficacy",
        definition: "One's sense of competence and effectiveness in dealing with specific situations or tasks. It's a belief in one's ability to succeed.",
        example: "Believing you can pass a difficult test; feeling confident in your ability to give a presentation.",
        significance: "Bandura's concept; high self-efficacy leads to setting higher goals, persistence, and better performance.",
      },
      {
        name: "Learned Helplessness",
        definition: "(Seligman) The hopelessness and passive resignation an animal or human learns when unable to avoid repeated aversive events. Often linked to perceived lack of control.",
        example: "Dogs that couldn't escape shocks earlier don't try to escape later even when possible; people in uncontrollable negative situations may give up.",
        significance: "Demonstrates how experiences can shape beliefs about control, impacting motivation and potentially contributing to depression.",
      },
      {
        name: "Optimism vs. Pessimism",
        definition: "Refers to one's general explanatory style – whether one attributes setbacks to external, temporary, specific factors (optimism) or internal, stable, global factors (pessimism).",
        example: "Failing a test: Optimist ('Unfair test, I'll do better next time') vs. Pessimist ('I'm stupid, I'll always fail').",
        significance: "Influences motivation, persistence, health outcomes, and overall well-being. Considered an aspect of personal control.",
      }
    ],
  },
   {
    title: "Topic 7.8: Humanistic Theories of Personality",
    terms: [
       {
        name: "Humanistic Theories",
        definition: "Theories that view personality with a focus on the potential for healthy personal growth, self-determination, and self-realization. Emphasize conscious experience and subjective reality.",
        example: "Maslow's hierarchy of needs; Rogers' person-centered perspective.",
        significance: "Offered a 'third force' in psychology, contrasting with deterministic psychoanalysis and behaviorism; focuses on positive human potential. Criticized for being vague, subjective, and overly optimistic.",
      },
      {
        name: "Abraham Maslow",
        definition: "Humanistic psychologist known for his Hierarchy of Needs theory, culminating in self-actualization.",
        example: "His pyramid structure illustrating the progression of human motivations.",
        significance: "Emphasized growth motivation and the drive to fulfill one's potential.",
      },
      {
        name: "Carl Rogers: Person-Centered Perspective",
        definition: "Humanistic perspective holding that people are basically good and endowed with self-actualizing tendencies. Growth is promoted by a social climate offering Genuineness, Acceptance (Unconditional Positive Regard), and Empathy.",
        example: "Therapist providing a supportive, non-judgmental environment for client growth.",
        significance: "Influential perspective emphasizing the importance of self-concept and the conditions necessary for personal growth.",
      },
      {
        name: "Unconditional Positive Regard (UPR)",
        definition: "According to Rogers, an attitude of total acceptance toward another person, valuing them even knowing their failings.",
        example: "A parent loving their child regardless of the child's mistakes or shortcomings.",
        significance: "Believed by Rogers to be crucial for developing a healthy self-concept and fostering psychological growth.",
      },
      {
        name: "Self-Concept",
        definition: "All our thoughts and feelings about ourselves, in answer to the question, 'Who am I?' Includes assessment of one's ideal self vs. actual self.",
        example: "Viewing oneself as intelligent, kind, and capable.",
        significance: "Central feature of personality for humanists; congruence between ideal and actual self is key to happiness and adjustment.",
      },
    ],
  },
   {
    title: "Topic 7.9: Trait Theories of Personality",
    terms: [
      {
        name: "Trait Theories",
        definition: "Theories that focus on identifying, describing, and measuring fundamental personality traits, which are characteristic patterns of behavior or disposition.",
        example: "Describing someone based on the 'Big Five' traits (conscientiousness, agreeableness, etc.).",
        significance: "Aims to define personality in terms of stable and enduring behavioral patterns, allowing for prediction of behavior.",
      },
      {
        name: "Trait",
        definition: "A characteristic pattern of behavior or a disposition to feel and act, as assessed by self-report inventories and peer reports.",
        example: "Introversion, agreeableness, conscientiousness, anxiety.",
        significance: "The basic building blocks of personality according to trait theorists.",
      },
      {
        name: "Gordon Allport",
        definition: "Early trait theorist who focused on describing individual traits rather than explaining them. He identified central, secondary, and cardinal traits.",
        example: "Interviewed Freud and realized psychoanalysis might dig too deep, decided to describe manifest traits.",
        significance: "Pioneered the trait approach, emphasizing the uniqueness of individual personality constellations.",
      },
      {
        name: "Raymond Cattell",
        definition: "Trait theorist who used factor analysis to identify 16 underlying source traits that he believed formed the basis of personality. Developed the 16PF (Personality Factor) questionnaire.",
        example: "Identifying dimensions like warmth, reasoning, emotional stability through statistical analysis.",
        significance: "Advanced the use of statistical techniques (factor analysis) to identify fundamental personality dimensions.",
      },
      {
        name: "Hans & Sybil Eysenck",
        definition: "Trait theorists who reduced personality to a few genetically influenced dimensions, primarily Extraversion-Introversion and Neuroticism (emotional stability)-Instability. Later added Psychoticism.",
        example: "Using questionnaires to place individuals along these broad dimensions.",
        significance: "Emphasized the biological basis of traits and proposed a simpler, hierarchical structure of personality.",
      },
       {
        name: "Biology and Personality",
        definition: "Research area suggesting biological factors influence personality traits. Evidence includes brain differences (e.g., arousal levels related to extraversion), genetic influences on temperament and traits.",
        example: "Extraverts may have lower baseline brain arousal, seeking external stimulation.",
        significance: "Supports the idea that personality has roots in genetics and neurophysiology, consistent with Eysencks' view.",
      },
      {
        name: "Personality Inventory",
        definition: "A questionnaire (often with true/false or agree/disagree items) on which people respond to items designed to gauge a wide range of feelings and behaviors; used to assess selected personality traits.",
        example: "MMPI, Big Five inventories.",
        significance: "Common tool used by trait theorists and clinicians for objective assessment of personality.",
      },
      {
        name: "Minnesota Multiphasic Personality Inventory (MMPI)",
        definition: "The most widely researched and clinically used of all personality tests. Originally developed to identify emotional disorders, this test is now used for many other screening purposes. It is an empirically derived test.",
        example: "Used in clinical diagnosis, forensic settings, personnel selection.",
        significance: "A major example of an objective personality inventory with strong research support for certain uses.",
      },
      {
        name: "Empirically Derived Test",
        definition: "A test (such as the MMPI) developed by testing a pool of items and then selecting those that discriminate between different groups (e.g., clinically depressed vs. typical individuals).",
        example: "An MMPI item is kept if it is answered differently by depressed individuals compared to a control group.",
        significance: "Items are chosen based on their predictive validity, not necessarily face validity or theoretical connection.",
      },
      {
        name: "The 'Big Five' Personality Factors (CANOE/OCEAN)",
        definition: "The current best approximation of the basic trait dimensions. These factors are Conscientiousness, Agreeableness, Neuroticism (emotional stability vs. instability), Openness, and Extraversion. They appear stable, heritable, cross-cultural, and predictive.",
        example: "Describing someone as high in openness, low in neuroticism, moderate in extraversion, etc.",
        significance: "Provides a widely accepted, comprehensive framework for describing personality structure.",
      },
       { name: "Conscientiousness", definition: "Big Five trait dimension: Organized, careful, disciplined vs. Disorganized, careless, impulsive.", example: "Being punctual and reliable.", significance: "Predicts academic and occupational success." },
       { name: "Agreeableness", definition: "Big Five trait dimension: Soft-hearted, trusting, helpful vs. Ruthless, suspicious, uncooperative.", example: "Being cooperative and considerate.", significance: "Related to interpersonal relationships and prosocial behavior." },
       { name: "Neuroticism (Emotional Stability vs. Instability)", definition: "Big Five trait dimension: Calm, secure, self-satisfied vs. Anxious, insecure, self-pitying.", example: "Tendency to experience negative emotions.", significance: "Predicts vulnerability to psychological distress." },
       { name: "Openness (to Experience)", definition: "Big Five trait dimension: Imaginative, prefers variety, independent vs. Practical, prefers routine, conforming.", example: "Being curious and open to new ideas.", significance: "Related to creativity and intellectual interests." },
       { name: "Extraversion", definition: "Big Five trait dimension: Sociable, fun-loving, affectionate vs. Retiring, sober, reserved.", example: "Enjoying social gatherings and seeking stimulation.", significance: "Related to positive emotionality and social engagement." },
      {
        name: "Person-Situation Controversy",
        definition: "The debate concerning whether personality traits are consistent across situations or whether behavior is primarily determined by situational factors.",
        example: "Is someone always honest, or does their honesty depend on the specific situation (e.g., opportunity to cheat)?",
        significance: "Conclusion: Behavior is an interaction between inner disposition (traits) and the environment (situation). Traits predict average behavior well, but situations influence specific actions.",
      }
    ],
  },
   {
    title: "Topic 7.10: Measuring Personality",
    terms: [
      {
        name: "Personality Inventories",
        definition: "Self-report questionnaires used to assess personality traits. Typically use objective scoring.",
        example: "MMPI, NEO-PI-R (Big Five Inventory), Myers-Briggs Type Indicator (MBTI - less scientifically validated).",
        significance: "Efficient way to gather large amounts of information; relies on respondent honesty and self-awareness. Trait perspective favored.",
      },
      {
        name: "Projective Tests",
        definition: "Personality tests that provide ambiguous stimuli designed to trigger projection of one's inner dynamics and unconscious motives.",
        example: "Thematic Apperception Test (TAT), Rorschach Inkblot Test.",
        significance: "Favored by psychodynamic perspective; aim to bypass conscious defenses. Criticized for low reliability and validity.",
      },
      {
        name: "Thematic Apperception Test (TAT)",
        definition: "A projective test in which people express their inner feelings and interests through the stories they make up about ambiguous scenes.",
        example: "Showing a picture of a boy looking at a violin and asking for a story about it.",
        significance: "Assesses underlying motives, concerns, and perceptions of the social world (e.g., achievement motivation). Interpretation is subjective.",
      },
      {
        name: "Rorschach Inkblot Test",
        definition: "The most widely used projective test, a set of 10 inkblots, designed by Hermann Rorschach; seeks to identify people's inner feelings by analyzing their interpretations of the blots.",
        example: "Asking 'What might this be?' for each inkblot.",
        significance: "Aims to reveal unconscious conflicts and personality structure. Validity and reliability are highly controversial.",
      },
      {
        name: "Behavioral Assessment",
        definition: "Observing behavior in realistic situations to assess personality.",
        example: "Observing candidates during a simulated work task; watching children interact in a classroom.",
        significance: "Favored by social-cognitive perspective; provides direct evidence of behavior patterns in context. Considered the best predictor of future behavior in similar situations, but can be time-consuming.",
      },
    ],
   },
   // Note: "AP Psychology Terms Guide" is just a footer in the input text, not a term.
]

const unit8Topics = [
  {
    title: "Topic 8.1: Introduction to Psychological Disorders",
    terms: [
      {
        name: "Psychological Disorder",
        definition: "Syndrome marked by a clinically significant disturbance in an individual's cognition, emotion regulation, or behavior. Such thoughts, emotions, or behaviors are dysfunctional or maladaptive (interfere with normal day-to-day life), often distressful, and deviant (differing from cultural norms).",
        example: "Major depressive disorder, schizophrenia, generalized anxiety disorder.",
        significance: "Affects millions worldwide; understanding definitions, criteria, and perspectives helps in diagnosis, treatment development, and reducing stigma. Risk of harm (esp. self-harm) is a consideration, though most with disorders are not violent.",
      },
      {
        name: "Criteria for Disorder (The 3 Ds + Significance)",
        definition: "Behavior/mental state is generally considered disordered if it is Deviant (differs from norms), Distressful (causes upset to the person or others), and Dysfunctional/Maladaptive (interferes with daily life). Must also be a 'clinically significant' disturbance.",
        example: "Washing hands excessively to the point they are raw and it takes hours (Dysfunctional, Distressful) due to contamination fears (Deviant thought process).",
        significance: "Helps distinguish clinically relevant conditions from unusual behavior or temporary states. Context and culture are crucial (e.g., hearing voices is normal in some cultures).",
      },
      {
        name: "Medical Model",
        definition: "The concept that psychological disorders have physical causes that can be diagnosed, treated, and, in most cases, cured, often through treatment in a hospital or with medication.",
        significance: "Focuses on diagnosis based on symptoms and searching for cures, similar to physical illnesses. Credited with reducing stigma but criticized for neglecting psychological/social factors.",
      },
      {
        name: "Biopsychosocial Approach",
        definition: "An integrated approach that incorporates biological (e.g., genes, brain structure, neurotransmitters), psychological (e.g., stress, trauma, learned helplessness, mood-related perceptions), and social-cultural (e.g., roles, expectations, definitions of normality) levels of analysis to understand psychological disorders.",
        significance: "Provides a more comprehensive understanding of disorders as arising from the interaction of nature and nurture.",
        example: "Explaining depression by considering genetic predisposition (bio), negative thinking patterns (psycho), and job loss (social)."
      },
      {
        name: "Epigenetics",
        definition: "The study of environmental influences on gene expression that occur without a DNA change. Shows how environmental factors (diet, drugs, stress) can affect whether genes linked to disorders are expressed.",
        significance: "Explains how nurture can shape nature, triggering genetic predispositions for disorders.",
        example: "Stress during pregnancy potentially altering gene expression in offspring, increasing vulnerability to certain disorders."
      },
      {
        name: "DSM-5 (Diagnostic and Statistical Manual of Mental Disorders, 5th Ed)",
        definition: "The American Psychiatric Association's widely used system for classifying psychological disorders. Provides diagnostic criteria and codes.",
        significance: "Benefits: Standardizes diagnosis and language for communication among professionals, guides treatment decisions, allows for tracking prevalence rates. Criticisms: May cast too wide a net (pathologizing everyday life), potential for diagnostic labels to create stigma, relies heavily on the medical model.",
      },
      {
        name: "Attention-Deficit/Hyperactivity Disorder (ADHD)",
        definition: "A psychological disorder marked by extreme inattention and/or hyperactivity and impulsivity.",
        example: "Difficulty sustaining attention in tasks, fidgeting or squirming, interrupting others.",
        significance: "Common neurodevelopmental disorder often diagnosed in childhood, can persist into adulthood."
      },
      {
        name: "Risk of Harm",
        definition: "Concerns related to potential harm associated with psychological disorders. Most individuals with disorders are not violent (more likely to be victims). Risk of violence is slightly elevated with severe disorders combined with factors like substance abuse or command hallucinations. Risk of self-harm and suicide is significantly elevated for certain disorders (e.g., depression, bipolar disorder, PTSD, BPD).",
        significance: "Important consideration in clinical assessment and treatment planning, while also combating stigma associated with violence.",
      },
    ],
  },
  {
    title: "Topic 8.2: Anxiety Disorders, OCD, and Trauma-Related Disorders",
    terms: [
      {
        name: "Anxiety Disorders",
        definition: "Psychological disorders characterized by distressing, persistent anxiety or maladaptive behaviors that reduce anxiety.",
        example: "GAD, Panic Disorder, Phobias, Social Anxiety Disorder, Agoraphobia.",
      },
      {
        name: "Generalized Anxiety Disorder (GAD)",
        definition: "An anxiety disorder in which a person is continually tense, apprehensive, and in a state of autonomic nervous system arousal, often with 'free-floating' anxiety (not linked to a specific stressor).",
        example: "Constant worry about various aspects of life (work, health, family) without specific cause, accompanied by restlessness, fatigue, difficulty concentrating.",
      },
      {
        name: "Panic Disorder",
        definition: "An anxiety disorder marked by unpredictable, minutes-long episodes of intense dread (panic attacks) in which a person may experience terror and accompanying chest pain, choking, or other frightening sensations. Often followed by worry about possible next attack.",
      },
      {
        name: "Panic Attack",
        definition: "A sudden episode of intense fear or discomfort that reaches a peak within minutes and includes symptoms like heart palpitations, sweating, trembling, shortness of breath, feeling of choking, chest pain, nausea, dizziness, chills or heat sensations, numbness, fear of losing control or dying.",
        significance: "Core feature of Panic Disorder, but can occur in other anxiety disorders.",
      },
      {
        name: "Phobia",
        definition: "An anxiety disorder marked by a persistent, irrational fear and avoidance of a specific object, activity, or situation.",
        significance: "Fear is out of proportion to the actual danger posed.",
      },
      {
        name: "Specific Phobia",
        definition: "Fear and avoidance of specific objects or situations (e.g., flying, heights, animals like spiders, receiving an injection, blood).",
      },
      {
        name: "Social Anxiety Disorder (Social Phobia)",
        definition: "Intense fear and avoidance of social situations due to fear of being scrutinized, judged negatively, or embarrassed.",
        example: "Extreme fear of public speaking, meeting new people, or eating in public.",
      },
      {
        name: "Agoraphobia",
        definition: "Fear or avoidance of situations, such as crowds or wide open places, where one has felt loss of control and panic, fearing that escape might be difficult or help unavailable if panic-like symptoms occur.",
        example: "Avoiding public transportation, being in enclosed spaces, standing in line, being outside of the home alone."
      },
      {
        name: "Obsessive-Compulsive Disorder (OCD)",
        definition: "A disorder characterized by unwanted repetitive thoughts (obsessions), actions (compulsions), or both, that cause distress and interfere with daily life.",
        significance: "Now classified separately from Anxiety Disorders in DSM-5 but shares features.",
      },
      {
        name: "Obsessions",
        definition: "Recurrent and persistent thoughts, urges, or images that are experienced as intrusive and unwanted, and cause marked anxiety or distress.",
        example: "Thoughts about contamination, doubts (did I lock the door?), need for order, aggressive or horrific impulses.",
      },
      {
        name: "Compulsions",
        definition: "Repetitive behaviors (e.g., hand washing, ordering, checking) or mental acts (e.g., praying, counting, repeating words silently) that the individual feels driven to perform in response to an obsession or according to rules that must be applied rigidly, aimed at preventing or reducing anxiety or preventing some dreaded event.",
        example: "Excessive hand washing due to contamination obsession; repeatedly checking the stove due to doubts.",
      },
      {
        name: "Trauma- and Stressor-Related Disorders",
        definition: "Disorders in which exposure to a traumatic or stressful event is listed explicitly as a diagnostic criterion.",
        example: "PTSD, Acute Stress Disorder.",
      },
      {
        name: "Posttraumatic Stress Disorder (PTSD)",
        definition: "A disorder characterized by haunting memories, nightmares, hypervigilance, social withdrawal, jumpy anxiety, numbness of feeling, and/or insomnia that lingers for four weeks or more after a traumatic experience.",
        example: "Combat veteran experiencing flashbacks, avoidance of stimuli associated with combat, persistent negative emotional state.",
        significance: "Requires exposure to actual or threatened death, serious injury, or sexual violence.",
      },
      // Conceptual term summarizing understanding:
      {
        name: "Understanding Anxiety/OCD/PTSD",
        definition: "Explanations involve multiple perspectives: Conditioning (classical conditioning creates fear associations, operant conditioning maintains avoidance/compulsions via reinforcement), Cognition (hypervigilance to threats, catastrophic interpretations of symptoms), Biology (genetic predisposition, overactive amygdala, underactive prefrontal cortex, neurotransmitter imbalances like serotonin/glutamate), Natural Selection (evolutionary preparedness for certain fears).",
        significance: "Highlights the biopsychosocial nature of these disorders.",
      },
    ]
  },
  {
    title: "Topic 8.3: Dissociative Disorders, Somatic Symptom Disorders, and Personality Disorders",
    terms: [
      {
        name: "Dissociative Disorders",
        definition: "Rare disorders in which conscious awareness becomes separated (dissociated) from previous memories, thoughts, and feelings, resulting in a disruption of identity and awareness.",
        example: "Dissociative Identity Disorder, Dissociative Amnesia.",
      },
      {
        name: "Dissociative Identity Disorder (DID)",
        definition: "A rare dissociative disorder in which a person exhibits two or more distinct and alternating personalities (alters). Formerly called multiple personality disorder.",
        significance: "Highly controversial diagnosis, often linked to severe childhood trauma.",
      },
      {
        name: "Dissociative Amnesia",
        definition: "Memory loss for personal information, events, or a period of time, that is too extensive to be explained by ordinary forgetfulness, often following trauma or stress. May involve dissociative fugue.",
        example: "Sudden inability to recall one's own name or personal history after a traumatic event.",
      },
      {
        name: "Dissociative Fugue",
        definition: "A specifier for Dissociative Amnesia involving sudden, unexpected travel away from home or one's customary place of work, accompanied by an inability to recall one's past and confusion about personal identity or the assumption of a new identity.",
        example: "A person disappearing from home, traveling to a new city, and starting a new life with no memory of their past identity.",
      },
      {
        name: "Somatic Symptom and Related Disorders",
        definition: "Psychological disorders in which the symptoms take a somatic (bodily) form without apparent physical cause.",
        example: "Somatic Symptom Disorder, Illness Anxiety Disorder, Conversion Disorder.",
      },
      {
        name: "Somatic Symptom Disorder",
        definition: "A disorder in which a person experiences one or more distressing bodily symptoms and spends excessive time and energy focusing on these symptoms, often interpreting them as signs of serious illness.",
        example: "Experiencing chronic pain or fatigue and constantly worrying about its cause, frequently visiting doctors despite reassurance.",
      },
      {
        name: "Illness Anxiety Disorder (Hypochondriasis)",
        definition: "A disorder in which a person is preoccupied with having or acquiring a serious illness. Somatic symptoms are typically not present or, if present, are only mild in intensity. There is high level of anxiety about health.",
        example: "Interpreting normal physical sensations (headache, stomach ache) as symptoms of a dreaded disease like cancer or a brain tumor.",
      },
      {
        name: "Conversion Disorder (Functional Neurological Symptom Disorder)",
        definition: "A disorder in which a person experiences very specific, genuine physical symptoms (e.g., paralysis, blindness, numbness, loss of sensation, seizures) for which no physiological or neurological basis can be found. Often seems related to stress or trauma.",
        example: "Sudden blindness after witnessing a horrific event, with no damage to the eyes or visual pathways.",
      },
      {
        name: "Personality Disorders",
        definition: "Inflexible and enduring behavior patterns that impair social functioning. They are typically stable over time and across situations.",
        significance: "Organized into three clusters in DSM-5: Cluster A (Odd/Eccentric), Cluster B (Dramatic/Emotional/Erratic), Cluster C (Anxious/Fearful).",
      },
      {
        name: "Cluster A Personality Disorders (Odd/Eccentric)",
        definition: "Includes Paranoid Personality Disorder (distrust/suspiciousness), Schizoid Personality Disorder (detachment from social relationships, restricted emotion), and Schizotypal Personality Disorder (social deficits, cognitive/perceptual distortions, eccentricities).",
      },
      {
        name: "Cluster B Personality Disorders (Dramatic/Emotional/Erratic)",
        definition: "Includes Antisocial Personality Disorder, Borderline Personality Disorder, Histrionic Personality Disorder, and Narcissistic Personality Disorder.",
      },
      {
        name: "Antisocial Personality Disorder",
        definition: "A personality disorder (Cluster B) in which a person (usually male) exhibits a lack of conscience for wrongdoing, even toward friends and family members. May be aggressive and ruthless or a clever con artist. Lack of empathy and remorse.",
        significance: "Linked to reduced autonomic arousal ('fearlessness') and differences in brain areas like the frontal lobes.",
      },
      {
        name: "Borderline Personality Disorder (BPD)",
        definition: "A personality disorder (Cluster B) characterized by a pattern of instability in interpersonal relationships, self-image, and affects (emotions), and marked impulsivity.",
        example: "Frantic efforts to avoid abandonment, unstable intense relationships, identity disturbance, impulsivity (spending, sex, substance abuse), recurrent suicidal behavior, chronic feelings of emptiness, intense anger.",
      },
      {
        name: "Histrionic Personality Disorder",
        definition: "A personality disorder (Cluster B) characterized by excessive emotionality and attention seeking.",
        example: "Needing to be the center of attention, using physical appearance to draw attention, displaying rapidly shifting and shallow emotions.",
      },
      {
        name: "Narcissistic Personality Disorder",
        definition: "A personality disorder (Cluster B) characterized by grandiosity (in fantasy or behavior), need for admiration, and lack of empathy.",
        example: "Exaggerated sense of self-importance, preoccupation with fantasies of success, belief they are 'special', sense of entitlement, exploiting others.",
      },
      {
        name: "Cluster C Personality Disorders (Anxious/Fearful)",
        definition: "Includes Avoidant Personality Disorder (social inhibition, feelings of inadequacy, hypersensitivity to negative evaluation), Dependent Personality Disorder (need to be taken care of, submissive/clinging behavior, fears of separation), and Obsessive-Compulsive Personality Disorder (preoccupation with orderliness, perfectionism, control - distinct from OCD).",
      },
    ]
  },
  {
    title: "Topic 8.4: Depressive Disorders and Bipolar Disorders",
    terms: [
      {
        name: "Depressive Disorders",
        definition: "Mood disorders characterized by the presence of sad, empty, or irritable mood, accompanied by somatic and cognitive changes that significantly affect the individual’s capacity to function.",
        example: "Major Depressive Disorder (MDD), Persistent Depressive Disorder (Dysthymia)."
      },
      {
        name: "Major Depressive Disorder (MDD)",
        definition: "A disorder characterized by two or more weeks with five or more symptoms, at least one of which must be either (1) depressed mood or (2) loss of interest or pleasure (anhedonia). Other symptoms include significant changes in appetite or weight, insomnia or hypersomnia, psychomotor agitation or retardation, fatigue or loss of energy, feelings of worthlessness or excessive guilt, diminished ability to think or concentrate, recurrent thoughts of death or suicide.",
        significance: "One of the most common psychological disorders worldwide."
      },
      {
        name: "Persistent Depressive Disorder (Dysthymia)",
        definition: "A disorder characterized by a chronically depressed mood that occurs for most of the day, more days than not, for at least two years (one year for children/adolescents), accompanied by at least two other depressive symptoms (e.g., poor appetite/overeating, insomnia/hypersomnia, low energy, low self-esteem, poor concentration, hopelessness).",
        significance: "Less severe but more chronic than MDD."
      },
      {
        name: "Bipolar and Related Disorders",
        definition: "Mood disorders characterized by alternating periods of depression and mania or hypomania.",
        significance: "Formerly known as manic-depressive disorder."
      },
      {
        name: "Bipolar Disorder",
        definition: "A disorder in which a person alternates between the hopelessness and lethargy of depression and the overexcited state of mania. (Bipolar I involves full manic episodes, Bipolar II involves hypomanic episodes and major depressive episodes).",
      },
      {
        name: "Mania",
        definition: "A hyperactive, wildly optimistic state in which dangerously poor judgment is common. Characterized by elevated, expansive, or irritable mood, increased energy/activity, decreased need for sleep, flight of ideas or racing thoughts, pressured speech, distractibility, increased goal-directed activity or psychomotor agitation, excessive involvement in risky activities.",
        significance: "Key feature distinguishing Bipolar Disorders from Depressive Disorders."
      },
      // Conceptual term summarizing understanding:
      {
        name: "Understanding Mood Disorders",
        definition: "Explanations involve multiple perspectives: Biology (genetic predispositions - higher heritability for bipolar disorder, differences in brain activity - less activity during depression, more during mania, neurotransmitter imbalances - norepinephrine and serotonin often implicated), Psychological/Social-Cognitive (negative thoughts and moods interact, learned helplessness, rumination - compulsive fretting/overthinking, negative explanatory style - attributing negative events to stable, global, internal causes). A cycle can occur: Stressful experiences -> Negative explanatory style -> Depressed mood -> Cognitive and behavioral changes -> Further stressful experiences.",
        significance: "Emphasizes the biopsychosocial interplay in mood disorders."
      },
    ]
  },
  {
    title: "Topic 8.5: Schizophrenia Spectrum and Other Psychotic Disorders",
    terms: [
      {
        name: "Schizophrenia",
        definition: "A psychological disorder characterized by delusions, hallucinations, disorganized speech, and/or diminished, inappropriate emotional expression. It represents a split from reality (psychosis), not a split personality.",
        significance: "A severe mental disorder affecting approximately 1% of the population."
      },
      {
        name: "Psychotic Disorders",
        definition: "A group of psychological disorders marked by irrational ideas, distorted perceptions, and a loss of contact with reality.",
        example: "Schizophrenia, Schizoaffective Disorder, Delusional Disorder."
      },
      // Category for symptoms:
      // { name: "Symptoms of Schizophrenia", definition: "Grouped into positive (presence of inappropriate behaviors) and negative (absence of appropriate behaviors) symptoms.", significance: "Diagnosis requires presence of characteristic symptoms." },
      {
        name: "Positive Symptoms (Schizophrenia)",
        definition: "Symptoms of schizophrenia that involve the presence of inappropriate behaviors.",
        example: "Hallucinations (false perceptions, often auditory), delusions (false beliefs, often of persecution or grandeur), disorganized speech (e.g., word salad, derailment), grossly disorganized or catatonic behavior.",
      },
      {
        name: "Negative Symptoms (Schizophrenia)",
        definition: "Symptoms of schizophrenia that involve the absence of appropriate behaviors.",
        example: "Flat affect (diminished emotional expression), avolition (decrease in motivated activities), alogia (diminished speech output), anhedonia (decreased ability to experience pleasure), asociality (lack of interest in social interactions).",
      },
      {
        name: "Hallucinations",
        definition: "False sensory experiences, such as seeing something in the absence of an external visual stimulus, or hearing voices when no one is speaking. Auditory hallucinations are most common in schizophrenia.",
      },
      {
        name: "Delusions",
        definition: "False beliefs, often of persecution (belief that others are plotting against you) or grandeur (belief that you are exceptionally important), that may accompany psychotic disorders.",
      },
      {
        name: "Disorganized Speech (Thought Disorder)",
        definition: "Speech patterns characterized by incoherence, illogicality, or frequent derailment (shifting rapidly between topics). Reflects underlying disturbances in thought processes.",
        example: "'Word salad' - jumbled ideas making no sense.",
      },
      {
        name: "Catatonic Behavior",
        definition: "Marked decrease in reactivity to the environment, ranging from resistance to instructions (negativism) to maintaining rigid, inappropriate or bizarre posture, to complete lack of verbal/motor responses (mutism/stupor). Can also include purposeless excessive motor activity (catatonic excitement).",
        significance: "Can be a symptom of schizophrenia or other disorders.",
      },
      {
        name: "Chronic (Process) Schizophrenia",
        definition: "Form of schizophrenia in which symptoms usually appear by late adolescence or early adulthood. As people age, psychotic episodes last longer and recovery periods shorten. Recovery is less likely.",
        significance: "Often associated with more negative symptoms."
      },
      {
        name: "Acute (Reactive) Schizophrenia",
        definition: "Form of schizophrenia that can begin at any age, frequently occurs in response to an emotionally traumatic event, and has extended recovery periods. Recovery is more likely.",
        significance: "Often associated with more positive symptoms."
      },
      // Conceptual term summarizing understanding:
      {
        name: "Understanding Schizophrenia",
        definition: "Explanations involve multiple perspectives: Brain Abnormalities (excess dopamine receptors - Dopamine Hypothesis, abnormal brain activity/anatomy like low frontal lobe activity, tissue shrinkage in cortex/thalamus, enlarged ventricles), Prenatal environment (maternal virus during mid-pregnancy), Genetics (strong genetic predisposition, multiple genes involved, epigenetic factors), Psychological factors (stress can trigger onset in genetically vulnerable individuals - Diathesis-Stress Model).",
        significance: "Highlights complex interaction of biological vulnerabilities and environmental factors."
      },
    ]
  },
  {
    title: "Topic 8.6: Introduction to Therapy and Psychodynamic/Humanistic Therapies",
    terms: [
      {
        name: "Psychotherapy",
        definition: "Treatment involving psychological techniques; consists of interactions between a trained therapist and someone seeking to overcome psychological difficulties or achieve personal growth.",
      },
      {
        name: "Biomedical Therapy",
        definition: "Prescribed medications or procedures that act directly on the person's physiology to treat psychological disorders.",
        example: "Drug therapy, ECT, rTMS, psychosurgery."
      },
      {
        name: "Eclectic Approach",
        definition: "An approach to psychotherapy that uses techniques from various forms of therapy, depending on the client's problems.",
        significance: "Most common approach used by therapists today."
      },
      {
        name: "Psychoanalysis",
        definition: "Sigmund Freud's therapeutic technique. Freud believed the patient's free associations, resistances, dreams, and transferences—and the therapist's interpretations of them—released previously repressed feelings, allowing the patient to gain self-insight.",
        significance: "Foundation for psychodynamic therapies, emphasizes unconscious conflicts and childhood experiences.",
      },
      {
        name: "Free Association",
        definition: "In psychoanalysis, a method of exploring the unconscious in which the person relaxes and says whatever comes to mind, no matter how trivial or embarrassing.",
      },
      {
        name: "Interpretation",
        definition: "In psychoanalysis, the analyst's noting supposed dream meanings, resistances, and other significant behaviors and events in order to promote insight.",
      },
      {
        name: "Resistance",
        definition: "In psychoanalysis, the blocking from consciousness of anxiety-laden material.",
        example: "Suddenly changing the subject, forgetting appointments.",
      },
      {
        name: "Transference",
        definition: "In psychoanalysis, the patient's transfer to the analyst of emotions linked with other relationships (such as love or hatred for a parent).",
        significance: "Seen as a crucial process for working through past relationship issues."
      },
      {
        name: "Psychodynamic Therapy",
        definition: "Therapy deriving from the psychoanalytic tradition; views individuals as responding to unconscious forces and childhood experiences, and seeks to enhance self-insight. Focuses more on current relationships and themes.",
        significance: "Often shorter and less intensive than traditional psychoanalysis."
      },
      {
        name: "Humanistic Therapies",
        definition: "Therapies that aim to boost people's self-fulfillment by helping them grow in self-awareness and self-acceptance. Focus on present and future, conscious thoughts, taking responsibility, and promoting growth.",
        key_figures: "Carl Rogers, Abraham Maslow"
      },
      {
        name: "Insight Therapies",
        definition: "A variety of therapies that aim to improve psychological functioning by increasing a person's awareness of underlying motives and defenses.",
        example: "Psychoanalytic and Humanistic therapies.",
      },
      {
        name: "Client-Centered Therapy (Person-Centered Therapy)",
        definition: "A humanistic therapy, developed by Carl Rogers, in which the therapist uses techniques such as active listening within a genuine, accepting, empathic environment to facilitate clients' growth. Non-directive approach.",
        significance: "Emphasizes the client's inherent potential for self-fulfillment."
      },
      {
        name: "Active Listening",
        definition: "Empathic listening in which the listener echoes, restates, and clarifies what the person expresses (verbally or nonverbally) and acknowledges the expressed feelings. A key technique in client-centered therapy.",
      },
      {
        name: "Unconditional Positive Regard",
        definition: "A caring, accepting, nonjudgmental attitude, which Carl Rogers believed was conducive to developing self-awareness and self-acceptance.",
        significance: "One of the three core therapist conditions in client-centered therapy (along with genuineness and empathy)."
      },
    ]
  },
  {
    title: "Topic 8.7: Behavior, Cognitive, and Group Therapies",
    terms: [
      {
        name: "Behavior Therapy",
        definition: "Therapy that applies learning principles (classical and operant conditioning) to the elimination of unwanted behaviors. Assumes that problematic behaviors are the problem, not just symptoms of an underlying issue.",
      },
      {
        name: "Counterconditioning",
        definition: "Behavior therapy procedures that use classical conditioning to evoke new responses to stimuli that are triggering unwanted behaviors.",
        example: "Includes exposure therapies and aversive conditioning.",
      },
      {
        name: "Exposure Therapies",
        definition: "Behavioral techniques, such as systematic desensitization and virtual reality exposure therapy, that treat anxieties by exposing people (in imagination or actual situations) to the things they fear and avoid.",
        significance: "Based on the principle of habituation or extinction."
      },
      {
        name: "Systematic Desensitization",
        definition: "A type of exposure therapy, developed by Joseph Wolpe, that associates a pleasant relaxed state with gradually increasing anxiety-triggering stimuli. Commonly used to treat phobias.",
        process: "Involves creating an anxiety hierarchy and learning relaxation techniques.",
      },
      {
        name: "Virtual Reality Exposure Therapy",
        definition: "An anxiety treatment that progressively exposes people to electronic simulations of their greatest fears, such as airplane flying, spiders, or public speaking.",
        significance: "Useful when real-life exposure is difficult, dangerous, or expensive."
      },
      {
        name: "Aversive Conditioning",
        definition: "A type of counterconditioning that associates an unpleasant state (such as nausea) with an unwanted behavior (such as drinking alcohol).",
        significance: "Limited effectiveness as cognition influences conditioning; people know the aversion is therapy-induced."
      },
      // { name: "Operant Conditioning Techniques", definition: "Using reinforcement, shaping, and punishment to change behavior.", significance: "Foundation for behavior modification and token economies." },
      {
        name: "Behavior Modification",
        definition: "Applying operant conditioning principles to change behavior by reinforcing desired behaviors and withholding reinforcement for or punishing undesired behaviors.",
      },
      {
        name: "Token Economy",
        definition: "An operant conditioning procedure in which people earn a token (a chip, point, etc.) for exhibiting a desired behavior and can later exchange the tokens for various privileges or treats.",
        example: "Used in psychiatric hospitals, classrooms, institutions.",
      },
      {
        name: "Cognitive Therapy",
        definition: "Therapy, developed by Aaron Beck, that teaches people new, more adaptive ways of thinking; based on the assumption that thoughts intervene between events and our emotional reactions. Focuses on identifying and challenging negative automatic thoughts and maladaptive beliefs.",
        significance: "Particularly effective for depression and anxiety."
      },
      {
        name: "Rational-Emotive Behavior Therapy (REBT)",
        definition: "A confrontational cognitive therapy, developed by Albert Ellis, that vigorously challenges people's illogical, self-defeating attitudes and assumptions. Uses the ABC model (Activating event, Belief, Consequence).",
      },
      {
        name: "Cognitive-Behavioral Therapy (CBT)",
        definition: "A popular integrative therapy that combines cognitive therapy (changing self-defeating thinking) with behavior therapy (changing behavior).",
        significance: "Widely researched and evidence-based treatment for many disorders (e.g., anxiety, depression, PTSD, OCD, eating disorders)."
      },
      {
        name: "Group Therapy",
        definition: "Therapy conducted with groups rather than individuals, permitting therapeutic benefits from group interaction.",
        significance: "Benefits include: cost-effectiveness, exploring social behaviors, developing social skills, sharing problems, providing feedback and support. Not suitable for all problems or individuals.",
      },
      {
        name: "Family Therapy",
        definition: "Therapy that treats the family as a system. Views an individual's unwanted behaviors as influenced by, or directed at, other family members. Aims to heal relationships and improve communication within the family unit.",
      },
    ]
  },
  {
    title: "Topic 8.8: Evaluating Psychotherapies and Prevention Strategies",
    terms: [
      {
        name: "Evaluating Psychotherapy Effectiveness",
        definition: "Assessing whether psychotherapy works. Challenges include client and clinician biases (placebo effect, regression toward the mean, justification of effort).",
        significance: "Requires rigorous scientific methods like randomized controlled trials and meta-analyses."
      },
      {
        name: "Client Perceptions (Effectiveness)",
        definition: "Clients generally report high satisfaction with therapy, but this can be biased by factors like wanting to believe the therapy worked, liking the therapist, and regression toward the mean (natural tendency for extreme states to return to average).",
      },
      {
        name: "Clinician Perceptions (Effectiveness)",
        definition: "Clinicians also tend to perceive therapy as effective, but they may be biased as they often see clients when they are improving and may attribute improvement to their therapy when other factors are involved.",
      },
      {
        name: "Outcome Research",
        definition: "Systematic research (e.g., randomized clinical trials, meta-analyses) comparing the outcomes of treated groups with control groups (e.g., no treatment, placebo).",
        significance: "Provides empirical evidence for therapy effectiveness. Meta-analyses consistently show that the average therapy client ends up better off than 80% of untreated individuals. Some therapies are more effective for specific disorders.",
      },
      {
        name: "Evidence-Based Practice",
        definition: "Clinical decision making that integrates the best available research evidence with clinical expertise and patient characteristics, preferences, and circumstances.",
        significance: "Aims to ensure clients receive treatments with demonstrated effectiveness."
      },
      {
        name: "Eye Movement Desensitization and Reprocessing (EMDR)",
        definition: "A therapy technique in which the client recalls distressing traumatic memories while engaging in bilateral stimulation, such as tracking the therapist's moving finger.",
        significance: "Used primarily for PTSD. Controversy exists regarding its mechanism; effectiveness may largely stem from exposure component and therapeutic relationship, rather than eye movements themselves.",
      },
      {
        name: "Light Exposure Therapy",
        definition: "A treatment for Seasonal Affective Disorder (SAD) that involves timed exposure to bright artificial light during the seasons with less natural sunlight.",
        significance: "Shown to be effective in relieving symptoms of SAD.",
      },
      {
        name: "Common Factors in Effective Therapy",
        definition: "Aspects shared by most effective therapies, regardless of theoretical orientation.",
        example: "Hope (instilling belief in improvement), a New Perspective (offering plausible explanation and alternative ways of looking at self/world), and a Therapeutic Alliance (an empathic, trusting, caring relationship between therapist and client).",
        significance: "Suggests the therapeutic relationship itself is crucial."
      },
      {
        name: "Cultural Competence",
        definition: "A therapist's ability to understand, appreciate, and interact with people from cultures or belief systems different from their own. Involves awareness of one's own biases and sensitivity to the client's cultural background, values, and preferences.",
        significance: "Essential for effective therapy across diverse populations."
      },
      {
        name: "Preventing Psychological Disorders",
        definition: "Efforts aimed at reducing the incidence of psychological disorders by addressing risk factors and promoting protective factors.",
        example: "Programs focusing on building resilience, competence, and coping skills; changing stressful or toxic environments (e.g., poverty, abuse); community psychology initiatives.",
        significance: "Shift from solely treating illness to promoting mental health and well-being."
      },
    ]
  },
  {
    title: "Topic 8.9: Biomedical Therapies",
    terms: [
      {
        name: "Biomedical Therapy",
        definition: "Prescribed medications or procedures that act directly on the person's physiology to treat psychological disorders.",
        // Note: Redundant with 8.6 definition, retained for topic context.
      },
      {
        name: "Psychopharmacology",
        definition: "The study of the effects of drugs on mind and behavior.",
      },
      // { name: "Drug Therapies", definition: "Treatment of psychological disorders with medication.", significance: "Most common biomedical therapy." },
      {
        name: "Antipsychotic Drugs",
        definition: "Drugs used to treat schizophrenia and other forms of severe thought disorder. Most work by blocking dopamine receptors.",
        example: "Older ('typical') drugs like Thorazine (chlorpromazine); newer ('atypical') drugs like Clozapine, Risperidone.",
        side_effects: "Older drugs: sluggishness, tremors, tardive dyskinesia (involuntary movements). Newer drugs: lower risk of movement problems but increased risk of obesity, diabetes.",
      },
      {
        name: "Antianxiety Drugs",
        definition: "Drugs used to control anxiety and agitation. Typically depress central nervous system activity.",
        example: "Benzodiazepines like Xanax (alprazolam), Valium (diazepam), Ativan (lorazepam). Enhance effects of GABA.",
        significance: "Can provide short-term relief but can be addictive; may reduce symptoms without resolving underlying problems. Newer non-benzodiazepine options exist.",
      },
      {
        name: "Antidepressant Drugs",
        definition: "Drugs used to treat depression, anxiety disorders, obsessive-compulsive disorder, and posttraumatic stress disorder. Most increase the availability of neurotransmitters like norepinephrine or serotonin.",
        example: "Selective Serotonin Reuptake Inhibitors (SSRIs) like Prozac (fluoxetine), Zoloft (sertraline), Paxil (paroxetine). Also SNRIs, older tricyclics, MAOIs.",
        significance: "Take several weeks to reach full effect. Placebo effect is significant. Increased risk of suicide, especially in teens/young adults, may occur early in treatment.",
      },
      {
        name: "Mood-Stabilizing Medications",
        definition: "Drugs used to treat bipolar disorder, primarily by reducing the severity and frequency of manic episodes.",
        example: "Lithium carbonate is the classic example. Anticonvulsant drugs like Depakote (valproate) are also widely used.",
      },
      // { name: "Brain Stimulation Therapies", definition: "Biomedical therapies that involve directly stimulating or altering brain activity.", example: "ECT, rTMS, DBS." },
      {
        name: "Electroconvulsive Therapy (ECT)",
        definition: "A biomedical therapy for severely depressed patients in which a brief electric current is sent through the brain of an anesthetized patient, inducing a brief seizure.",
        significance: "Highly effective for treatment-resistant severe depression, though mechanism is unclear. Main side effect is temporary memory loss around the procedure.",
      },
      {
        name: "Repetitive Transcranial Magnetic Stimulation (rTMS)",
        definition: "The application of repeated pulses of magnetic energy to the brain; used to stimulate or suppress brain activity in specific regions.",
        significance: "Approved for treating depression, particularly when medication fails. Procedure is painless, requires no anesthesia, and has minimal side effects compared to ECT.",
      },
      {
        name: "Deep Brain Stimulation (DBS)",
        definition: "A procedure involving surgically implanted electrodes that deliver continuous electrical stimulation to specific brain areas.",
        significance: "Used for treatment-resistant depression, OCD, and neurological disorders like Parkinson's. Still experimental for some psychiatric uses.",
      },
      {
        name: "Psychosurgery",
        definition: "Surgery that removes or destroys brain tissue in an effort to change behavior.",
        significance: "Most drastic and least-used biomedical therapy due to its irreversible nature. Modern procedures are much more precise than historical lobotomies.",
      },
      {
        name: "Lobotomy",
        definition: "A now-rare psychosurgical procedure once used to calm uncontrollably emotional or violent patients. The procedure cut the nerves connecting the frontal lobes to the emotion-controlling centers of the inner brain.",
        significance: "Historical procedure with devastating side effects, no longer performed.",
      },
      {
        name: "Therapeutic Lifestyle Change",
        definition: "Promoting lifestyle modifications as an adjunct or alternative treatment for psychological disorders.",
        example: "Aerobic exercise, adequate sleep, light exposure, social connection, anti-rumination strategies (positive thinking), nutritional supplements.",
        significance: "Recognizes the impact of lifestyle on mental health; considered a biopsychosocial approach.",
      },
    ]
  }
]
// Data structure for Unit 9 (Updated with provided terms)
const unit9Topics = [
  {
    title: "Topic 9.1: Attribution Theory and Person Perception",
    terms: [
      {
        name: "Social Psychology",
        definition: "The scientific study of how we think about, influence, and relate to one another.",
        significance: "Helps understand human social behavior and interaction.",
      },
      {
        name: "Attribution Theory",
        definition: "The theory, proposed by Fritz Heider, that suggests how we explain someone's behavior—by crediting either the situation (a situational attribution) or the person's enduring traits (a dispositional attribution).",
        significance: "Explains our tendency to interpret behavior.",
      },
      {
        name: "Situational Attribution",
        definition: "Explaining behavior based on external factors or the situation.",
        example: "Attributing a driver's speeding to being late for an important meeting.",
        significance: "Part of attribution theory; contrasts with dispositional attribution.",
       },
      {
        name: "Dispositional Attribution",
        definition: "Explaining behavior based on a person's internal characteristics, traits, or personality.",
        example: "Attributing a driver's speeding to their aggressive personality.",
        significance: "Part of attribution theory; contrasts with situational attribution.",
      },
      {
        name: "Fundamental Attribution Error",
        definition: "The tendency for observers, when analyzing others' behavior, to underestimate the impact of the situation and to overestimate the impact of personal disposition.",
        example: "Assuming someone who trips is clumsy (dispositional) rather than considering the uneven pavement (situational).",
        significance: "Common bias in social judgment, particularly strong in individualistic cultures.",
      },
      {
        name: "Actor-Observer Bias",
        definition: "The tendency to attribute our own actions to situational factors while attributing others' actions to dispositional factors.",
        example: "When I trip, it's the pavement; when someone else trips, they are clumsy.",
        significance: "Extension of the fundamental attribution error, highlighting differing perspectives.",
      },
      {
        name: "Self-Serving Bias",
        definition: "A readiness to perceive oneself favorably. Attributing successes to internal, dispositional factors and failures to external, situational factors.",
        example: "Acing a test is due to my intelligence (dispositional); failing a test is because it was unfair (situational).",
        significance: "Protects self-esteem but can distort perception of reality.",
      },
      {
        name: "Attitude",
        definition: "Feelings, often influenced by our beliefs, that predispose us to respond in a particular way to objects, people, and events.",
        significance: "Can affect actions, and actions can affect attitudes (e.g., cognitive dissonance).",
      },
      {
        name: "Peripheral Route Persuasion",
        definition: "Occurs when people are influenced by incidental cues, such as a speaker's attractiveness or celebrity endorsement.",
        significance: "Produces faster attitude change but is less durable and less likely to influence behavior than central route persuasion.",
      },
      {
        name: "Central Route Persuasion",
        definition: "Occurs when interested people focus on the arguments and respond with favorable thoughts.",
        significance: "Requires more cognitive effort but leads to more durable attitude change and is more likely to influence behavior.",
      },
      {
        name: "Foot-in-the-Door Phenomenon",
        definition: "The tendency for people who have first agreed to a small request to comply later with a larger request.",
        example: "Agreeing to put a small sign in your window makes you more likely to later agree to a large, ugly sign in your yard.",
        significance: "Demonstrates how actions can shape attitudes; used as a persuasion technique.",
      },
      {
        name: "Role Playing Affects Attitudes",
        definition: "Acting out a social role can lead individuals to adopt the attitudes associated with that role.",
        example: "Philip Zimbardo's Stanford Prison Experiment demonstrated how quickly participants adopted their assigned roles.",
        significance: "Shows the powerful influence of social roles and situations on attitudes and behavior.",
      },
      {
        name: "Stanford Prison Experiment",
        definition: "A controversial study conducted by Philip Zimbardo where college students assigned to roles of prisoners and guards quickly adopted behaviors and attitudes consistent with those roles, leading to the experiment's early termination.",
        significance: "Highlighted the power of the situation and social roles in shaping behavior; raised significant ethical concerns.",
      },
      {
        name: "Cognitive Dissonance Theory",
        definition: "The theory, proposed by Leon Festinger, that we act to reduce the discomfort (dissonance) we feel when two of our thoughts (cognitions) are inconsistent, or when our attitudes and actions clash. We often change our attitude to align with our behavior.",
        example: "If you believe smoking is bad but smoke anyway, you might reduce dissonance by downplaying the health risks or convincing yourself you enjoy it too much to quit.",
        significance: "Explains attitude change following behavior that contradicts one's beliefs.",
      },
    ],
  },
  { // Note: Topic 9.2 is missing in the provided text. Following user input.
    title: "Topic 9.3: Conformity and Obedience",
    terms: [
      {
        name: "Conformity",
        definition: "Adjusting our behavior or thinking to coincide with a group standard.",
        significance: "A common form of social influence, driven by normative or informational pressures.",
      },
      {
        name: "Normative Social Influence",
        definition: "Influence resulting from a person's desire to gain approval or avoid disapproval; conforming to be liked or accepted.",
        significance: "Explains conformity based on social norms and the need to belong.",
      },
      {
        name: "Informational Social Influence",
        definition: "Influence resulting from one's willingness to accept others' opinions about reality, especially when uncertain; conforming because we believe others are right.",
        significance: "Explains conformity based on the desire to be accurate.",
      },
      {
        name: "Solomon Asch's Conformity Experiments",
        definition: "Classic experiments where participants judged line lengths. When confederates gave obviously wrong answers, participants often conformed.",
        significance: "Demonstrated the power of group pressure to induce conformity, even when the task is unambiguous. Conformity increased with group size (up to a point), unanimity, group status, public response, and lack of prior commitment.",
      },
      {
        name: "Obedience",
        definition: "Compliance with the commands or orders of an authority figure.",
        significance: "A form of social influence where behavior is dictated by authority.",
      },
      {
        name: "Stanley Milgram's Obedience Experiments",
        definition: "Controversial experiments where participants ('teachers') were instructed by an authority figure (experimenter) to deliver increasingly strong electric shocks to a 'learner' (confederate) for errors. A high percentage (around 65%) obeyed fully.",
        significance: "Demonstrated the powerful influence of authority and situational factors on obedience, even when commands conflict with personal conscience.",
      },
       {
        name: "Factors Increasing Obedience (Milgram)",
        definition: "Conditions found to increase obedience rates in Milgram's studies.",
        example: "The person giving orders was close by and perceived as a legitimate authority figure; the authority figure was supported by a prestigious institution; the victim was depersonalized or at a distance; there were no role models for defiance.",
        significance: "Highlights situational variables that impact obedience.",
       },
    ],
  },
  {
    title: "Topic 9.4: Group Influence",
    terms: [
      {
        name: "Group",
        definition: "Two or more people who interact and are interdependent in the sense that their needs and goals cause them to influence each other.",
        significance: "The context for many social psychological phenomena.",
      },
      {
        name: "Social Facilitation",
        definition: "Improved performance on simple or well-learned tasks in the presence of others. Performance on difficult or novel tasks is often impaired (social inhibition). Explained by arousal enhancing dominant responses.",
        significance: "Shows how the mere presence of others affects performance.",
      },
      {
        name: "Social Loafing",
        definition: "The tendency for people in a group to exert less effort when pooling their efforts toward attaining a common goal than when individually accountable.",
        significance: "Occurs due to diffusion of responsibility; less likely when individual contributions are identifiable or task is challenging/appealing.",
      },
      {
        name: "Deindividuation",
        definition: "The loss of self-awareness and self-restraint occurring in group situations that foster arousal and anonymity.",
        example: "Riots, mob behavior, online anonymity leading to trolling.",
        significance: "Can lead to behavior inconsistent with individual norms (both antisocial and prosocial, depending on group context).",
      },
      {
        name: "Group Polarization",
        definition: "The enhancement of a group's prevailing inclinations through discussion within the group. Attitudes tend to become more extreme.",
        example: "A group of moderately prejudiced individuals becoming more prejudiced after discussing racial issues together.",
        significance: "Explains strengthening of attitudes in like-minded groups (online echo chambers, political rallies).",
      },
      {
        name: "Groupthink",
        definition: "The mode of thinking, described by Irving Janis, that occurs when the desire for harmony in a decision-making group overrides a realistic appraisal of alternatives.",
        example: "Historical fiascoes like Bay of Pigs invasion, Challenger disaster attributed partly to groupthink.",
        significance: "Leads to poor group decisions. Prevented by welcoming diverse opinions, seeking external critique, assigning a 'devil's advocate'.",
      },
      {
        name: "Culture",
        definition: "The enduring behaviors, ideas, attitudes, values, and traditions shared by a group of people and transmitted from one generation to the next.",
        significance: "Shapes norms, attitudes, and behaviors.",
      },
      {
        name: "Norm",
        definition: "An understood rule for accepted and expected behavior. Norms prescribe 'proper' behavior.",
        significance: "Guide social interactions and contribute to social order.",
      },
    ],
  },
  {
    title: "Topic 9.5: Bias, Prejudice, and Discrimination",
    terms: [
      {
        name: "Prejudice",
        definition: "An unjustifiable and usually negative *attitude* toward a group and its members. Prejudice generally involves stereotyped beliefs, negative feelings (emotions), and a predisposition to discriminatory action.",
        significance: "The attitudinal component of negative intergroup relations.",
      },
      {
        name: "Stereotype",
        definition: "A generalized (sometimes accurate but often overgeneralized) *belief* about a group of people.",
        significance: "The cognitive component of prejudice; mental shortcuts that can bias perception.",
      },
      {
        name: "Discrimination",
        definition: "Unjustifiable negative *behavior* toward a group and its members.",
        significance: "The behavioral component of prejudice; acting on prejudiced attitudes.",
      },
      {
        name: "Explicit Prejudice",
        definition: "Conscious, openly expressed prejudice.",
        significance: "Overt prejudice that has generally declined but still exists.",
      },
      {
        name: "Implicit Prejudice",
        definition: "Unconscious, automatic prejudice that can influence thoughts and behaviors without conscious awareness. Often measured using tools like the Implicit Association Test (IAT).",
        significance: "Subtle form of prejudice that can still lead to discrimination.",
      },
      {
        name: "Social Inequalities (Root of Prejudice)",
        definition: "Disparities in wealth, power, and status can breed prejudice. Those with status often justify inequalities using prejudice (e.g., just-world phenomenon).",
        significance: "Highlights socio-structural contributions to prejudice.",
      },
      {
        name: "Ingroup",
        definition: "\"Us\"—people with whom we share a common identity.",
        significance: "Part of social categorization.",
      },
      {
        name: "Outgroup",
        definition: "\"Them\"—those perceived as different or apart from our ingroup.",
        significance: "Part of social categorization; target of prejudice.",
      },
      {
        name: "Ingroup Bias",
        definition: "The tendency to favor our own group.",
        significance: "Contributes to prejudice against outgroups.",
      },
      {
        name: "Scapegoat Theory",
        definition: "The theory that prejudice offers an outlet for anger by providing someone to blame when things go wrong.",
        example: "Blaming immigrants for economic problems.",
        significance: "Highlights emotional roots of prejudice; displacement of frustration.",
      },
      {
        name: "Categorization (Root of Prejudice)",
        definition: "Our tendency to simplify the world by putting people into groups. Leads to stereotyping and overestimating similarities within groups and differences between groups.",
        significance: "Cognitive shortcut underlying stereotyping.",
      },
      {
        name: "Other-Race Effect (Cross-Race Effect / Own-Race Bias)",
        definition: "The tendency to recall faces of one's own race more accurately than faces of other races.",
        significance: "Example of cognitive bias related to categorization and experience.",
      },
      {
        name: "Availability Heuristic (Root of Prejudice)",
        definition: "Estimating the likelihood of events based on their availability in memory; if instances come readily to mind (perhaps because of vivid cases), we presume such events are common.",
        example: "Overestimating crime rates associated with a minority group due to vivid media reports.",
        significance: "Cognitive bias contributing to stereotype formation/maintenance.",
      },
      {
        name: "Just-World Phenomenon",
        definition: "The tendency for people to believe the world is just and that people therefore get what they deserve and deserve what they get.",
        significance: "Can lead to blaming victims (e.g., poor people, rape victims) and justifying inequalities.",
      },
      {
        name: "Hindsight Bias (Root of Prejudice)",
        definition: "The tendency to believe, after learning an outcome, that one would have foreseen it ('I knew it all along').",
        significance: "Can contribute to victim blaming ('They should have known better').",
      },
    ],
  },
  {
    title: "Topic 9.6: Altruism and Aggression",
    terms: [
       {
        name: "Aggression",
        definition: "Any physical or verbal behavior intended to harm someone physically or emotionally.",
        significance: "A major topic in social psychology with biological, psychological, and social-cultural roots.",
      },
      {
        name: "Hostile Aggression",
        definition: "Aggression driven by anger and performed as an end in itself.",
        example: "Punching someone out of rage after being insulted.",
        significance: "Emotionally driven aggression.",
      },
      {
        name: "Instrumental Aggression",
        definition: "Aggression that is a means to some other end or goal.",
        example: "Tackling another player to stop them from scoring; terrorism used to make a political statement; robbery.",
        significance: "Goal-oriented aggression.",
      },
       {
        name: "Biological Influences on Aggression",
        definition: "Genetic predispositions, neural systems (like the amygdala and frontal lobes), and biochemical influences (like testosterone and alcohol) that can contribute to aggression.",
        significance: "Highlights the role of nature in aggressive behavior.",
      },
      {
        name: "Frustration-Aggression Principle",
        definition: "The principle that frustration—the blocking of an attempt to achieve some goal—creates anger, which can generate aggression.",
        example: "Traffic jams leading to road rage.",
        significance: "Links an aversive environmental event (frustration) to aggression.",
      },
      {
        name: "Reinforcement/Modeling (Aggression)",
        definition: "Aggression can be learned through operant conditioning (if aggressive acts are rewarded) and observational learning (by imitating aggressive models).",
        example: "Bandura's Bobo doll experiment showed children imitating adults' aggressive behavior towards the doll.",
        significance: "Emphasizes the learned (nurture) aspects of aggression.",
      },
      {
        name: "Social Scripts",
        definition: "Culturally modeled guides for how to act in various situations, often learned from media and observation.",
        example: "Media portrayals suggesting that violence is a common or acceptable way to handle conflict.",
        significance: "Provides mental blueprints that can influence behavior, especially in novel situations.",
      },
      {
        name: "Media Violence Effects",
        definition: "Research suggests exposure to media violence (TV, movies, video games) is correlated with increased aggressive thoughts, feelings, and behaviors, potentially through imitation, priming, and desensitization.",
        significance: "Important social issue regarding media influence; debate continues on the strength and causality, particularly concerning video games.",
      },
      {
        name: "Altruism",
        definition: "Unselfish regard for the welfare of others; helping behavior performed without expectation of personal reward.",
        significance: "Prosocial behavior central to cooperation and morality.",
      },
      {
        name: "Bystander Effect",
        definition: "The tendency for any given bystander to be less likely to give aid if other bystanders are present.",
        example: "The tragic case of Kitty Genovese, attacked while witnesses reportedly did little.",
        significance: "Counterintuitive finding demonstrating situational influences on helping. Key Figures: Bibb Latané and John Darley.",
      },
      {
        name: "Diffusion of Responsibility",
        definition: "A key reason for the bystander effect: When more people share the responsibility for helping, any single individual feels less personally responsible to act.",
        significance: "Explains reduced helping in group contexts.",
      },
       {
        name: "Pluralistic Ignorance",
        definition: "Another reason for the bystander effect: People may incorrectly assume from others' passive reactions that a situation is not an emergency.",
        example: "In an ambiguous situation (like smoke filling a room), if no one else looks concerned, individuals may conclude there's no real danger.",
        significance: "Social misinterpretation inhibits intervention.",
      },
      {
        name: "Decision Process for Helping (Latané & Darley)",
        definition: "A model suggesting that for a bystander to help, they must sequentially: (1) Notice the incident, (2) Interpret it as an emergency, (3) Assume responsibility, (4) Know appropriate form of assistance, and (5) Decide to implement help.",
        significance: "Failure at any step prevents helping; explains bystander effect.",
      },
      {
        name: "Social Exchange Theory",
        definition: "The theory that our social behavior is an exchange process, the aim of which is to maximize benefits and minimize costs. We help if the perceived benefits (e.g., feeling good, social approval, reduced guilt) outweigh the costs (e.g., time, effort, danger).",
        significance: "Views helping behavior through a lens of rational self-interest.",
      },
      {
        name: "Reciprocity Norm",
        definition: "An expectation that people will help, not hurt, those who have helped them.",
        significance: "Social rule promoting mutual aid and cooperation.",
      },
      {
        name: "Social-Responsibility Norm",
        definition: "An expectation that people will help those needing their help (such as young children, the elderly, or others dependent on us), regardless of future exchanges.",
        significance: "Motivates helping those perceived as unable to help themselves.",
      },
    ],
  },
  {
    title: "Topic 9.7: Interpersonal Attraction",
    terms: [
      {
        name: "Proximity",
        definition: "Geographic nearness. A powerful predictor of friendship and attraction, largely due to increased opportunities for interaction and the mere exposure effect.",
        significance: "Increases likelihood of forming relationships.",
      },
      {
        name: "Mere Exposure Effect",
        definition: "The phenomenon that repeated exposure to novel stimuli increases liking of them.",
        example: "Liking a song, advertisement, or person more after repeated encounters.",
        significance: "Familiarity often breeds fondness.",
      },
      {
        name: "Physical Attractiveness",
        definition: "A significant factor in initial attraction. Perceptions vary culturally and historically, but some aspects like symmetry and features associated with youth/health are often rated attractive across cultures.",
        significance: "Influences first impressions, social opportunities, and judgments (halo effect).",
      },
       {
        name: "Halo Effect",
        definition: "A cognitive bias where the perception of one positive trait (like physical attractiveness) leads to the assumption of other positive traits (like intelligence, kindness, success).",
        significance: "Influences social judgments based on attractiveness.",
      },
      {
        name: "Similarity",
        definition: "Sharing common attitudes, beliefs, interests, values, background, personality, or other characteristics. A strong predictor of attraction and relationship success ('Birds of a feather flock together').",
        significance: "Provides validation, reduces conflict, facilitates interaction.",
      },
      {
        name: "Reciprocal Liking",
        definition: "The tendency to like people who we believe like us.",
        significance: "Knowing someone is attracted to us increases our attraction to them.",
      },
      {
        name: "Passionate Love",
        definition: "An aroused state of intense positive absorption in another, usually present at the beginning of a romantic relationship. Involves physiological arousal and cognitive appraisal.",
        significance: "Characterized by intense longing, euphoria, and preoccupation.",
      },
      {
        name: "Companionate Love",
        definition: "The deep affectionate attachment we feel for those with whom our lives are intertwined. Characterized by trust, calmness, and bonding.",
        significance: "Develops over time; associated with relationship stability and satisfaction. Key components include equity and self-disclosure.",
      },
      {
        name: "Equity",
        definition: "A condition in which people receive from a relationship in proportion to what they give to it. Perceived fairness in the exchange of benefits and costs.",
        significance: "Important factor in maintaining long-term companionate love and relationship satisfaction.",
      },
      {
        name: "Self-Disclosure",
        definition: "The act of revealing intimate aspects of oneself (thoughts, feelings, experiences) to others.",
        significance: "Builds intimacy, trust, and closeness in relationships; tends to be reciprocal.",
      },
    ],
  },
  {
    title: "Topic 9.8: Conflict and Peacemaking",
    terms: [
      {
        name: "Conflict",
        definition: "A perceived incompatibility of actions, goals, or ideas between individuals or groups.",
        significance: "An inherent part of social interaction; can be destructive but also can lead to positive change.",
      },
      {
        name: "Social Trap",
        definition: "A situation in which conflicting parties, by each rationally pursuing their self-interest rather than the good of the group, become caught in mutually destructive behavior.",
        example: "The Prisoner's Dilemma game illustrates this; the Tragedy of the Commons (depleting shared resources).",
        significance: "Demonstrates how individual rationality can lead to collective negative outcomes.",
      },
      {
        name: "Mirror-Image Perceptions",
        definition: "Mutual views often held by conflicting people or groups, where each side sees itself as ethical and peaceful and views the other side as evil, aggressive, and untrustworthy.",
        significance: "Distorted perceptions that fuel conflict escalation and hinder resolution.",
      },
      {
        name: "Self-Fulfilling Prophecy",
        definition: "A belief or expectation that leads to its own fulfillment.",
        example: "If country A expects country B to be hostile, country A may arm itself, leading country B to respond defensively, confirming country A's initial expectation.",
        significance: "Shows how expectations can shape interactions and outcomes, particularly in conflict situations.",
      },
       {
        name: "Contact (Promoting Peace)",
        definition: "Increased contact between conflicting groups can reduce prejudice, but often only under specific conditions: cooperation towards superordinate goals, equal status, informal personal interaction, and supportive social norms.",
        significance: "Highlights conditions necessary for intergroup contact to be effective.",
      },
       {
        name: "Cooperation (Promoting Peace)",
        definition: "Working together toward shared goals.",
        significance: "Can bridge divides and reduce conflict by changing perceptions from 'us vs. them' to 'we'. Demonstrated in Sherif's Robbers Cave experiment.",
      },
      {
        name: "Superordinate Goals",
        definition: "Shared goals that override differences among people and require their cooperation to achieve.",
        example: "In Muzafer Sherif's Robbers Cave study, tasks like fixing the water supply forced hostile groups to cooperate.",
        significance: "A key strategy for reducing intergroup conflict.",
      },
      {
        name: "Communication (Promoting Peace)",
        definition: "Direct negotiation or mediation by a third party to help conflicting parties understand each other's perspectives and find common ground.",
        significance: "Essential for resolving misunderstandings and finding mutually agreeable solutions.",
      },
      {
        name: "Conciliation (Promoting Peace)",
        definition: "Actions taken by one party to reduce tension in a conflict, such as making a small concession or offering an apology.",
        significance: "Can help de-escalate conflict and encourage reciprocity.",
      },
      {
        name: "GRIT (Graduated and Reciprocated Initiatives in Tension-Reduction)",
        definition: "A strategy designed to decrease international tensions. One side initiates one or more small, conciliatory acts after announcing mutual interests and intent to reduce tension. This encourages the other side to reciprocate.",
        significance: "A step-by-step peacemaking strategy focused on building trust through reciprocal concessions.",
      },
    ],
  },
]