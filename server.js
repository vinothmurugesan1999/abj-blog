const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

const posts = [
  {
    title: "Early Life and Education",
    content: `
Dr. A.P.J. Abdul Kalam was born on October 15, 1931, in Rameswaram, a small island town in Tamil Nadu. He belonged to a humble Muslim family and helped his father with boat-building and his brother in selling newspapers to support the family.

Despite financial hardships, Kalam was an excellent student. He developed a deep interest in mathematics and physics, and eventually joined the Madras Institute of Technology (MIT) to study aerospace engineering — a dream he pursued with passion and discipline.
    `
  },
  {
    title: "Scientific Career and Achievements",
    content: `
After graduation, Dr. Kalam joined DRDO and later moved to ISRO where he played a major role in developing India’s first indigenous satellite launch vehicle (SLV-III), which successfully deployed the Rohini satellite in 1980.

He also led India’s missile development programs, including Agni and Prithvi. His work earned him the title "Missile Man of India". He was instrumental in the success of India's Pokhran-II nuclear tests in 1998, making India a nuclear-armed nation.
    `
  },
  {
    title: "Presidency of India",
    content: `
Dr. Kalam served as the 11th President of India from 2002 to 2007. He was widely loved and respected for his humility, honesty, and dedication to youth empowerment.

He preferred to interact with students, visited schools and colleges across the country, and encouraged every young Indian to dream big and contribute to the nation's development. He refused to use luxurious privileges and stayed humble even as the Commander-in-Chief of India.
    `
  },
  {
    title: "Books and Philosophy",
    content: `
Dr. Kalam wrote several inspirational books such as:

- *Wings of Fire* (his autobiography)
- *Ignited Minds*
- *India 2020*
- *The Luminous Sparks*
- *Transcendence*

These books focus on patriotism, science, youth empowerment, and spiritual growth. His writing reflects deep love for India and a vision for transforming the country into a knowledge superpower.
    `
  },
  {
    title: "Final Years and Legacy",
    content: `
Dr. Kalam continued to serve the country even after his presidency. He became a visiting professor at several prestigious institutions and dedicated his life to mentoring students and young professionals.

He passed away on July 27, 2015, while delivering a lecture at IIM Shillong. His last words were reportedly, "Funny guy! Are you doing well?" — showing his humor and love for students even in his final moments.

His birthday, October 15, is celebrated as World Students’ Day in his honor.

> "Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work." – Dr. Kalam
    `
  }
];


app.get('/', (req, res) => {
  res.render('home', { posts });
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/posts', (req, res) => {
  res.render('posts', { posts });
});

app.get('/posts/:title', (req, res) => {
  const post = posts.find(p => p.title.toLowerCase() === req.params.title.toLowerCase());
  if (post) {
    res.render('post', { post });
  } else {
    res.status(404).send("Post not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
