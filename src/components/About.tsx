import { motion } from "framer-motion";
import { Award, Users, Home, TrendingUp } from "lucide-react";
import nancyPic from "../assets/nancypic.jpg";
const stats = [
  { icon: Home, value: "100+", label: "Properties Sold" },
  { icon: Users, value: "125+", label: "Happy Clients" },
  { icon: Award, value: "15+", label: "Years Experience" },
  { icon: TrendingUp, value: "$XX+", label: "Sales Volume" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
              Dedicated to Your Success
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 15 years of experience in real estate, I bring
              unparalleled expertise and dedication to every client. My approach
              combines deep market knowledge with personalized service to ensure
              you find not just a house, but your perfect home.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're buying your first home, upgrading to a larger space,
              or investing in property, I'm committed to making your real estate
              journey seamless and rewarding.
            </p>
          </motion.div>

          {/* Right: Photo + Stats */}
<motion.div
  initial={{ opacity: 0, x: 30 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
  className="flex flex-col items-center lg:items-center space-y-8"
>
  {/* Portrait / About Image */}
  <div className="
  relative w-48 h-64 md:w-56 md:h-72 lg:w-64 lg:h-80
  rounded-2xl overflow-hidden bg-card shadow-xl hover:shadow-2xl 
  transition-all duration-300 border border-border
">
  <img
    src={nancyPic}
    alt="Nancy Rowbotham, your trusted real estate guide"
    className="w-full h-full object-cover object-top"
  />

  {/* soft vignette */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30" />

  {/* inner glow */}
  <div className="absolute inset-0 ring-1 ring-white/20" />
</div>

  {/* Stats Grid */}
  <div className="grid grid-cols-2 gap-6 w-full">
    {stats.map((stat, index) => {
      const Icon = stat.icon;
      return (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-card border border-border rounded-lg p-6 text-center"
        >
          <Icon className="w-12 h-12 text-primary mx-auto mb-3" />
          <div className="font-serif text-5xl font-bold text-foreground tracking-tight mb-2">
            {stat.value}
          </div>
          <div className="text-base md:text-lg text-muted-foreground">{stat.label}</div>
        </motion.div>
      );
    })}
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
