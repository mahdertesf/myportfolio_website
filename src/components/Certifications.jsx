import React from 'react';
import SectionWrapper from './SectionWrapper';

const Certifications = () => {
  const mlCertificates = [
    {
      title: 'Machine Learning Specialization',
      provider: 'Andrew Ng, deeplearning.ai, Stanford',
      description: 'Covered supervised/unsupervised learning, neural networks, decision trees, reinforcement learning, and model-building best practices.',
      image: 'assets/images/machine.png',
      link: 'https://coursera.org/verify/specialization/4JDE3LUJF78E',
    },
    {
      title: 'Deep Learning Specialization',
      provider: 'deeplearning.ai',
      description: 'Completed 5 courses on CNNs, RNNs, LSTMs, and Transformers using Python and TensorFlow, with applications in speech recognition, music synthesis, NLP, and machine translation, including hyperparameter tuning.',
      image: '/assets/images/deeplearning.png',
      link: 'https://coursera.org/verify/specialization/VIVV7BW0DSB1',
    },
    {
      title: 'Sequence Models',
      provider: 'Andrew Ng, deeplearning.ai',
      description: 'Covered sequence models, including RNNs, GRUs, LSTMs, and attention mechanisms, with applications in NLP and time series analysis.',
      image: 'assets/images/sequence_models.png',
      link: 'https://coursera.org/verify/WCASC15R45F1',
    },
    {
      title: 'Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning',
      provider: 'DeepLearning.AI',
      description: 'Learned the basics of TensorFlow and how to build and train neural networks for AI, ML, and DL applications.',
      image: 'assets/images/tensorflow.png',
      link: 'https://coursera.org/verify/02S9J85LYQRG',
    },
    {
      title: 'Natural Language Processing with Classification and Vector Spaces',
      provider: 'deeplearning.ai',
      description: 'Learned about text classification, vector space models, and word embeddings for NLP applications.',
      image: 'assets/images/vector.png',
      link: 'https://coursera.org/share/aed303c3407cfa0ce7c4143b7414d50f',
    },
    {
      title: 'Natural Language Processing with Probabilistic Models',
      provider: 'DeepLearning.AI',
      description: 'Learned about probabilistic models for NLP, including hidden Markov models and probabilistic context-free grammars.',
      image: 'assets/images/probabilistic_models.png',
      link: 'https://coursera.org/share/48b78bf1d45c3b87e08c01fd720fceaf',
    },
    {
      title: 'Convolutional Neural Networks in TensorFlow',
      provider: 'DeepLearning.AI',
      description: 'Learned how to build and train convolutional neural networks using TensorFlow for various computer vision tasks.',
      image: 'assets/images/cnn_tensorflow.png',
      link: 'https://coursera.org/share/0c14192811891181ce4c7053da915685',
    },
    {
      title: 'Convolutional Neural Networks',
      provider: 'DeepLearning.AI',
      description: 'Learned how to build and train convolutional neural networks for various computer vision tasks.',
      image: 'assets/images/cnn.png',
      link: 'https://coursera.org/share/1721f6e199ed0c9113feea9da02b426f',
    },
    {
      title: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
      provider: 'DeepLearning.AI',
      description: 'Learned techniques to improve the performance of deep neural networks, including hyperparameter tuning, regularization, and optimization.',
      image: 'assets/images/hyperparameter_tuning.png',
      link: 'https://coursera.org/share/d7577657aa4404dc19a604fad203d963',
    },
    {
      title: 'Advanced Learning Algorithms',
      provider: 'DeepLearning.AI',
      description: 'Learned advanced techniques and algorithms for machine learning, including ensemble methods, gradient boosting, and advanced neural network architectures.',
      image: 'assets/images/advanced_learning_algorithms.png',
      link: 'https://coursera.org/verify/specialization/XYZ67890',
    },
    {
      title: 'Neural Networks and Deep Learning',
      provider: 'DeepLearning.AI',
      description: 'Learned the fundamentals of neural networks and deep learning, including forward and backward propagation, gradient descent, and building neural networks from scratch.',
      image: 'assets/images/neural_networks.png',
      link: 'https://coursera.org/share/7a610d0809dbfb287d414187ec4b993e',
    },
    {
      title: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      provider: 'DeepLearning.AI',
      description: 'Learned the fundamentals of unsupervised learning, recommendation systems, and reinforcement learning, including clustering, collaborative filtering, and Q-learning.',
      image: 'assets/images/unsupervised_learning.png',
      link: 'https://coursera.org/share/b8db61aa5e6bb19f28ed995ca1fff7ab',
    },
    {
      title: 'Structuring Machine Learning Projects',
      provider: 'DeepLearning.AI',
      description: 'Learned best practices for structuring machine learning projects, including error analysis, orthogonalization, and setting up ML pipelines.',
      image: 'assets/images/structuring_ml_projects.png',
      link: 'https://coursera.org/share/7b45d6e6fc733418f3aeba0e91ffd538',
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      provider: 'DeepLearning.AI',
      description: 'Learned the fundamentals of supervised machine learning, including regression and classification techniques, model evaluation, and performance metrics.',
      image: 'assets/images/supervised_ml.png',
      link: 'https://coursera.org/share/e6c37561540d2b8033e630c5e50b05f9',
    },
  ];

  const webDevCertificates = [
    {
      title: 'Django Web Framework',
      provider: 'Meta',
      description: 'Learned how to build web applications using the Django framework, including models, views, templates, and REST APIs.',
      image: 'assets/images/django.png',
      link: 'https://coursera.org/share/dd3fc3ebb77b799d46f136c7b18a94ae',
    },
    {
      title: 'Principles of UX/UI Design',
      provider: 'Meta',
      description: 'Learned the fundamental principles of user experience and user interface design, including usability, accessibility, and design thinking.',
      image: 'assets/images/ui.png',
      link: 'https://coursera.org/share/28bf77b02196df9bb18b13edf13a9f3d',
    },
    {
      title: 'Programming in Python',
      provider: 'Meta',
      description: 'Learned the fundamentals of programming in Python, including data structures, algorithms, and object-oriented programming.',
      image: 'assets/images/python.png',
      link: 'https://coursera.org/share/e52d258559efd9ef93c73cf73ade5f71',
    },
    {
      title: 'Introduction to Databases for Back-End Development',
      provider: 'Meta',
      description: 'Learned the fundamentals of database management systems, including SQL, NoSQL, and database design principles.',
      image: 'assets/images/database.png',
      link: 'https://coursera.org/share/f1e9491512572e19043c5ad7ff7dffe6',
    },
    {
      title: 'Version Control',
      provider: 'Meta',
      description: 'Learned the fundamentals of version control systems, including Git, branching, merging, and collaboration workflows.',
      image: 'assets/images/version_control.png',
      link: 'https://coursera.org/share/6e9936c41dbfcf46d0988d3ec2ba6bdc',
    },
    {
      title: 'React',
      provider: 'Meta',
      description: 'Learned the fundamentals of React, including components, state management, hooks, and building single-page applications.',
      image: 'assets/images/react.png',
      link: 'https://coursera.org/share/165e756a55d28b243ce0bcc590256fce',
    },
    {
      title: 'Programming with JavaScript',
      provider: 'Meta',
      description: 'Learned the fundamentals of programming with JavaScript, including syntax, control structures, functions, and object-oriented programming.',
      image: 'assets/images/javascript.png',
      link: 'https://coursera.org/share/b45f1b7312291eabce7fdf80655b42a1',
    },
    {
      title: 'Introduction to Back-End Development',
      provider: 'Meta',
      description: 'Learned the fundamentals of back-end development, including server-side programming, databases, and RESTful APIs.',
      image: 'assets/images/backend_development.png',
      link: 'https://coursera.org/share/3e5aac5b541d25ad3f4246b87eb8eef3',
    },
    {
      title: 'HTML and CSS in depth',
      provider: 'Meta',
      description: 'Learned the fundamentals of HTML and CSS, including advanced techniques for building responsive and accessible web pages.',
      image: 'assets/images/html_css.png',
      link: 'https://coursera.org/share/b17255e5efcfd2cc6225ac205d3883ba',
    },
    {
      title: 'Introduction to Front-End Development',
      provider: 'Meta',
      description: 'Learned the fundamentals of front-end development, including HTML, CSS, JavaScript, and responsive design.',
      image: 'assets/images/frontend_development.png',
      link: 'https://coursera.org/share/5c4adaf9c321cf5d82fa17ddc5bfc289',
    },
  ];

  return (
    <SectionWrapper id="certificates">
      <h2 className="text-3xl font-bold mb-8 text-center animate-fadeIn">Certifications</h2>
      <p className=" mb-8 text-light animate-fadeIn border-b border-glow pb-4">
        I have completed more than 20 certifications in AI and Web Development from Coursera, including but not limited to the following:
        <br />
        <strong>Machine Learning Specialization (Andrew Ng, deeplearning.ai, Stanford):</strong> Covered supervised and unsupervised learning, neural networks, decision trees, reinforcement learning, and model-building best practices.
        <br />
        <strong>Deep Learning Specialization (deeplearning.ai):</strong> Completed five courses focusing on CNNs, RNNs, LSTMs, and Transformers using Python and TensorFlow, with applications in speech recognition, music synthesis, NLP, and machine translation, including hyperparameter tuning.
        <br />
        <strong>Natural Language Processing Specialization (deeplearning.ai):</strong> Completed three courses on advanced NLP techniques and applications.
        <br />
        <strong>TensorFlow Developer Certificate Course:</strong> Completed two courses covering TensorFlow fundamentals and its applications in AI.
        <br />
        <strong>Front-end and back-end software development course certificates from Meta on Coursera.</strong>
      </p>
      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-4 text-center animate-fadeIn">Machine Learning Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mlCertificates.map((certificate, index) => (
            <div key={index} className="p-4">
              <div className="bg-bg-dark border border-glow p-4 rounded-lg shadow-md animate-glowBorder h-full flex flex-col justify-center items-center">
                <div className="relative overflow-hidden pb-[50%] rounded-lg group-hover:scale-105 transition-transform duration-300 w-full h-1/2">
                  <img src={certificate.image} alt={certificate.title} className="object-contain absolute top-0 left-0 w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mt-3 mb-2 text-glow animate-fadeIn">{certificate.title}</h3>
                <p className="text-sm text-light animate-fadeIn">{certificate.provider}</p>
                <p className="text-sm text-light animate-fadeIn">{certificate.description}</p>
                <a href={certificate.link} className='mt-3 inline-block text-primary hover:text-glow border-b border-primary transition-colors duration-300 animate-fadeIn'>See Certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-bold mb-4 text-center animate-fadeIn">Web Development Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {webDevCertificates.map((certificate, index) => (
            <div key={index} className="p-4">
              <div className="bg-bg-dark border border-glow p-4 rounded-lg shadow-md animate-glowBorder h-full flex flex-col justify-center items-center">
                <div className="relative overflow-hidden pb-[50%] rounded-lg group-hover:scale-105 transition-transform duration-300 w-full h-1/2">
                  <img src={certificate.image} alt={certificate.title} className="object-contain absolute top-0 left-0 w-full h-full" />
                </div>
                <h3 className="text-xl font-semibold mt-3 mb-2 text-glow animate-fadeIn">{certificate.title}</h3>
                <p className="text-sm text-light animate-fadeIn">{certificate.provider}</p>
                <p className="text-sm text-light animate-fadeIn">{certificate.description}</p>
                <a href={certificate.link} className='mt-3 inline-block text-primary hover:text-glow border-b border-primary transition-colors duration-300 animate-fadeIn'>See Certificate</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Certifications;