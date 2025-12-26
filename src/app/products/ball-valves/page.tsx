import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next';
import { FileText, Phone, ArrowRight, Lock, Zap, Flame, Settings, Filter } from 'lucide-react';

export const metadata: Metadata = {
  title: "Ball Valves - Flanged, Screwed, Actuated | Manufacturers in India",
  description: "Premium ball valves from India's leading manufacturer. One-piece, two-piece, three-piece designs. Flanged, screwed, socket weld options. API 607 fire-safe certified. ISO 9001:2015 quality.",
  keywords: ["ball valve manufacturers India", "flanged ball valve", "screwed ball valve", "fire safe ball valve", "pneumatic ball valve", "electric actuated ball valve"],
};

// Ball valve products with images mapped from public folder
const BALL_VALVE_PRODUCTS = [
  {
    id: "three-piece-long-stem-flanged",
    name: "Three Piece Design Long Stem Flanged End Ball Valve (FB)",
    class: "#150",
    image: "/images/products/c574b8_c777a03250d84b01905cb8d0f4aa603f~mv2.png",
    href: "/products/ball-valves/three-piece-long-stem-flanged",
    design: "Three-Piece",
    endConnection: "Flanged"
  },
  {
    id: "two-piece-flanged-fb",
    name: "Two Piece Design Flanged End Ball Valve (FB)",
    class: "#150",
    image: "/images/products/201d8f_61d8362b3abb45c79cff28be31df3dbb~mv2.jpg",
    href: "/products/ball-valves/two-piece-flanged-fb",
    design: "Two-Piece",
    endConnection: "Flanged"
  },
  {
    id: "two-piece-flanged-fire-safe",
    name: "Two Piece Design Flanged Ball Valve (FB) (Fire Safe)",
    class: "#150",
    image: "/images/products/201d8f_f42fb888b6374c47b3cbb4158a8e53e3~mv2.jpg",
    href: "/products/ball-valves/two-piece-flanged-fire-safe",
    design: "Two-Piece",
    endConnection: "Flanged",
    badge: "Fire Safe"
  },
  {
    id: "three-piece-flanged-fb",
    name: "Three Piece Design Flanged Ball Valve (FB)",
    class: "#150",
    image: "/images/products/201d8f_4e2bb9a885594042a4ef9a6135c735af~mv2.jpg",
    href: "/products/ball-valves/three-piece-flanged-fb",
    design: "Three-Piece",
    endConnection: "Flanged"
  },
  {
    id: "two-piece-long-stem-rb",
    name: "Two Piece Design Long Stem Flanged Ball Valve (RB)",
    class: "#150",
    image: "/images/products/201d8f_185379c1bbdf4deea7a974b64303f565~mv2.jpg",
    href: "/products/ball-valves/two-piece-long-stem-rb",
    design: "Two-Piece",
    endConnection: "Flanged"
  },
  {
    id: "automatic-ball-valve",
    name: "Automatic Ball Valve",
    class: "#150",
    image: "/images/products/201d8f_56e8af8b419f41929b0b2cacc2d1a8ae~mv2.jpg",
    href: "/products/ball-valves/automatic",
    design: "Actuated",
    endConnection: "Flanged",
    badge: "Automated"
  },
  {
    id: "three-piece-long-stem-se-sw-bw",
    name: "Three Piece Design Long Stem SE/SW/BW Ball Valve (FB)",
    class: "#150",
    image: "/images/products/201d8f_2759cf4717cb4397bc4455f5ecd9f9f0~mv2.jpg",
    href: "/products/ball-valves/three-piece-long-stem-se-sw-bw",
    design: "Three-Piece",
    endConnection: "Socket/Butt Weld"
  },
  {
    id: "one-piece-screwed",
    name: "One Piece Design Screwed Ball Valve (FB)",
    class: "#150",
    image: "/images/products/201d8f_73d4ffc5fadb4504a612bff3fc0548a1~mv2.jpg",
    href: "/products/ball-valves/one-piece-screwed",
    design: "One-Piece",
    endConnection: "Screwed"
  },
  {
    id: "two-piece-flanged-rb",
    name: "Two Piece Design Flanged Ball Valve (RB)",
    class: "#150",
    image: "/images/products/201d8f_5717d66745e6448cb74f984188c6245b~mv2.jpg",
    href: "/products/ball-valves/two-piece-flanged-rb",
    design: "Two-Piece",
    endConnection: "Flanged"
  },
  {
    id: "three-piece-three-way-se-sw-bw",
    name: "Three Piece Design Three Way S/E, S/W, B/W Ball Valve (RB)",
    class: "#150",
    image: "/images/products/201d8f_c5829affe68048969bb65b244df8cef7~mv2.jpg",
    href: "/products/ball-valves/three-piece-three-way-se-sw-bw",
    design: "Three-Piece",
    endConnection: "Socket/Butt Weld",
    badge: "3-Way"
  },
  {
    id: "three-piece-tri-clover",
    name: "Three Piece Design Tri Clover End Ball Valve",
    class: "#150",
    image: "/images/products/201d8f_7a18a7302ef044f98961d472d6d568a1~mv2.jpg",
    href: "/products/ball-valves/tri-clover",
    design: "Three-Piece",
    endConnection: "Tri-Clover",
    badge: "Sanitary"
  },
  {
    id: "forged-steel-a105",
    name: "Three Piece Design Forged Steel Ball Valve A105",
    class: "#800",
    image: "/images/products/201d8f_dc9b9c06396e4600a2b46119d74e2df3~mv2.jpg",
    href: "/products/ball-valves/forged-steel-a105",
    design: "Three-Piece",
    endConnection: "Socket/Screwed",
    badge: "High Pressure"
  },
  {
    id: "two-piece-long-stem-flanged",
    name: "Two Piece Design Long Stem Flanged End Ball Valve (FB)",
    class: "#150",
    image: "/images/products/201d8f_b5fbf02960284947a436cb14f607b46f~mv2.jpg",
    href: "/products/ball-valves/two-piece-long-stem-flanged",
    design: "Two-Piece",
    endConnection: "Flanged"
  },
  {
    id: "one-piece-flanged",
    name: "One Piece Design Flanged Ball Valve (FB)",
    class: "#150, #300",
    image: "/images/products/201d8f_8c1e88b2dbbe49d3ad98652238bb635a~mv2.jpg",
    href: "/products/ball-valves/one-piece-flanged",
    design: "One-Piece",
    endConnection: "Flanged"
  },
  {
    id: "three-piece-se-sw-bw",
    name: "Three Piece Design S/E, S/W, B/W Ball Valve (FB)",
    class: "#150",
    image: "/images/products/201d8f_344c11df80584170bb1f2b414e184d7c~mv2.jpg",
    href: "/products/ball-valves/three-piece-se-sw-bw",
    design: "Three-Piece",
    endConnection: "Socket/Butt Weld"
  },
  {
    id: "three-piece-three-way-flanged",
    name: "Three Piece Design Three Way Flanged Ball Valve (RB)",
    class: "#150",
    image: "/images/products/201d8f_c376dd1d0f30497fa44dcd432985a050~mv2.jpg",
    href: "/products/ball-valves/three-piece-three-way-flanged",
    design: "Three-Piece",
    endConnection: "Flanged",
    badge: "3-Way"
  },
  {
    id: "three-piece-od-base",
    name: "Three Piece Design OD Base Ball Valve",
    class: "#150",
    image: "/images/products/201d8f_410b7bbb108941a9b8e52343ea1984fc~mv2.jpg",
    href: "/products/ball-valves/three-piece-od-base",
    design: "Three-Piece",
    endConnection: "OD Base"
  }
];

export default function BallValvesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="gradient-hero pt-32 pb-20">
        <div className="container-custom">
          <div className="max-w-4xl">
            <nav className="text-white/60 text-sm mb-4">
              <Link href="/" className="hover:text-white">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/products" className="hover:text-white">Products</Link>
              <span className="mx-2">/</span>
              <span className="text-white">Ball Valves</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Leading Ball Valve<br />
              <span className="text-[var(--color-accent)]">Manufacturers in India</span>
            </h1>
            <p className="text-xl text-white/80 mb-8">
              At Unison Valves, we are one of India&apos;s top ball valve manufacturers, offering a wide variety 
              of ball valve types designed to meet the industrial demands of Indian markets. Our range includes 
              flanged ball valves, screwed ball valves, pneumatically actuated ball valves, and more.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/enquiry" className="btn-primary">
                Request Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="/downloads/unison-ball-valves-steam-traps-catalog.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FileText className="w-5 h-5" />
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What are Ball Valves */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-6">
              What are Ball Valves
            </h2>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed mb-8">
              A ball valve is a versatile and efficient device used to control the flow of liquids or gases. 
              The valve operates using a rotating ball inside the valve body, which opens and closes the flow 
              by aligning or misaligning with the pipe&apos;s opening. Because of their simple operation and tight 
              sealing capabilities, ball valves are ideal for industrial applications requiring quick on-off control.
            </p>
            <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">
              At Unison Valves, we manufacture a variety of ball valve types designed for different end connections, 
              pressure classes, and operability. Fully automated options are available as ball valves with pneumatic 
              or electric actuators combined with positioners, manual overrides, solenoid valves, air filter regulators 
              and other customizations.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-12 bg-[var(--color-background-alt)] border-y">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Lock className="w-12 h-12 mx-auto mb-4 text-[var(--color-accent)]" />
              <div className="font-bold text-lg text-[var(--color-primary)]">Tight Sealing</div>
              <div className="text-sm text-[var(--color-text-muted)]">Zero leakage performance</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Zap className="w-12 h-12 mx-auto mb-4 text-[var(--color-accent)]" />
              <div className="font-bold text-lg text-[var(--color-primary)]">Quick Operation</div>
              <div className="text-sm text-[var(--color-text-muted)]">90° turn on/off</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Flame className="w-12 h-12 mx-auto mb-4 text-[var(--color-accent)]" />
              <div className="font-bold text-lg text-[var(--color-primary)]">Fire Safe</div>
              <div className="text-sm text-[var(--color-text-muted)]">API 607 / DNV certified</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <Settings className="w-12 h-12 mx-auto mb-4 text-[var(--color-accent)]" />
              <div className="font-bold text-lg text-[var(--color-primary)]">Automation Ready</div>
              <div className="text-sm text-[var(--color-text-muted)]">Pneumatic/Electric actuators</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Title */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-2">
                Types of Ball Valves we offer
              </h2>
              <p className="text-[var(--color-text-muted)]">
                {BALL_VALVE_PRODUCTS.length}+ variants to meet different industrial requirements
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a 
                href="/downloads/unison-ball-valves-steam-traps-catalog.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-outline text-sm"
              >
                <FileText className="w-4 h-4" />
                Download Brochure
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid - Like Wix Website */}
      <section className="pb-16 bg-white">
        <div className="container-custom">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {BALL_VALVE_PRODUCTS.map((product) => (
              <div 
                key={product.id}
                className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl hover:border-[var(--color-accent)] transition-all duration-300"
              >
                {/* Product Image */}
                <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {product.badge}
                    </div>
                  )}
                </div>
                
                {/* Product Info */}
                <div className="p-5 border-t border-gray-100">
                  <h3 className="font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-[var(--color-text-muted)]">Class</span>
                      <span className="ml-2 font-semibold text-[var(--color-primary)]">{product.class}</span>
                    </div>
                    <Link 
                      href="/enquiry"
                      className="text-[var(--color-accent)] text-sm font-semibold hover:underline flex items-center gap-1"
                    >
                      Enquire <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] text-center mb-12">
            Industries We Serve Across India
          </h2>
          <p className="text-center text-[var(--color-text-muted)] max-w-3xl mx-auto mb-12">
            Our ball valves are designed to serve a wide range of industries in India
          </p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">Oil &amp; Gas</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Fire-safe and high-pressure ball valves for upstream and downstream processes</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">Chemical Processing</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Corrosion-resistant stainless steel ball valves for chemical plants</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">Water Treatment</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Reliable flow control with pneumatically actuated ball valves</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">Pharmaceutical</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Tri-clover ball valves for hygienic and sanitary fluid control</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">Power Generation</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Long stem ball valves for high-temperature applications</p>
            </div>
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">Food &amp; Beverage</h3>
              <p className="text-sm text-[var(--color-text-muted)]">Hygienic designs for sanitary processing requirements</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Select */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-[var(--color-primary)] mb-8">
              How to Select the Right Ball Valve for Your Needs?
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              When choosing the right ball valve for your system, consider these factors:
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[var(--color-accent)] font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)] mb-1">Pressure Class</h3>
                  <p className="text-[var(--color-text-muted)]">Ensure that the valve&apos;s pressure rating matches your system&apos;s requirements. For example, choose Class #800 for high-pressure systems.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[var(--color-accent)] font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)] mb-1">Valve Type</h3>
                  <p className="text-[var(--color-text-muted)]">Choose between flanged, screwed, or pneumatically actuated ball valves depending on the connection type and control needs.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[var(--color-accent)] font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)] mb-1">Material</h3>
                  <p className="text-[var(--color-text-muted)]">Stainless steel is recommended for corrosive environments, while forged steel is better for high-pressure applications.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-accent)]/10 rounded-lg flex items-center justify-center">
                  <span className="text-[var(--color-accent)] font-bold">4</span>
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-primary)] mb-1">Stem Length</h3>
                  <p className="text-[var(--color-text-muted)]">For insulated or high-temperature systems, opt for long stem ball valves.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-[var(--color-background-alt)]">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Technical Specifications
              </h2>
              <div className="bg-white rounded-xl p-6 space-y-4">
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Design Standard</span>
                  <span className="font-semibold">IS 9890-1981</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Pressure Testing</span>
                  <span className="font-semibold">BS 6755 / API 598</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Fire Test</span>
                  <span className="font-semibold">API 607</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Flange Dimensions</span>
                  <span className="font-semibold">ANSI B 16.5</span>
                </div>
                <div className="flex justify-between py-3 border-b">
                  <span className="text-[var(--color-text-muted)]">Face to Face</span>
                  <span className="font-semibold">ANSI B 16.10</span>
                </div>
                <div className="flex justify-between py-3">
                  <span className="text-[var(--color-text-muted)]">Pressure Class</span>
                  <span className="font-semibold">#150, #300, #600, #800, #1500</span>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                Materials Available
              </h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-[var(--color-primary)] mb-1">WCB</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Carbon Steel (Cast)</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-[var(--color-primary)] mb-1">SS304</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Stainless Steel 304</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-[var(--color-primary)] mb-1">SS316</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Stainless Steel 316</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-[var(--color-primary)] mb-1">CF8M</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Cast 316 Equivalent</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-[var(--color-primary)] mb-1">A105</div>
                  <div className="text-sm text-[var(--color-text-muted)]">Forged Carbon Steel</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-[var(--color-primary)] mb-1">Duplex</div>
                  <div className="text-sm text-[var(--color-text-muted)]">For Corrosive Service</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enquiry Form Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
              Get a Quote for Ball Valves
            </h2>
            <p className="text-[var(--color-text-muted)] mb-8">
              Share your requirements and our team will get back to you with the best solution
            </p>
            <Link href="/enquiry" className="btn-primary inline-flex">
              Request Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 gradient-accent">
        <div className="container-custom text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Need Ball Valves for Your Project?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Get customized solutions with fast delivery across India. 
            Our technical team can help you select the right valve.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/enquiry" className="bg-white text-[var(--color-accent)] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors inline-flex items-center gap-2">
              Get a Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+919922922026" className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call: +91 99229 22026
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
