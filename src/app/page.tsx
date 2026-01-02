'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Building2,
  HardHat,
  Wrench,
  FileText,
  Shield,
  TrendingUp,
  Users,
  Award,
  ChevronRight,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle
} from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        alert('Pesan berhasil dikirim!')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        alert('Terjadi kesalahan. Silakan coba lagi.')
      }
    } catch (error) {
      alert('Terjadi kesalahan. Silakan coba lagi.')
    }
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  const services = [
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Konstruksi Bangunan",
      description: "Jasa konstruksi bangunan komersial dan residensial dengan standar kualitas tertinggi."
    },
    {
      icon: <HardHat className="w-8 h-8" />,
      title: "Konstruksi Khusus",
      description: "Solusi konstruksi khusus yang disesuaikan dengan kebutuhan unik proyek Anda."
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "Renovasi & Perbaikan",
      description: "Jasa renovasi dan perbaikan bangunan dengan hasil yang memuaskan."
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: "Perencanaan Proyek",
      description: "Konsultasi dan perencanaan proyek konstruksi yang komprehensif."
    }
  ]

  const portfolioItems = [
    {
      title: "Proyek Komersial",
      category: "Bangunan Kantor",
      description: "Konstruksi gedung kantor modern dengan desain efisien"
    },
    {
      title: "Proyek Industri",
      category: "Pabrik & Gudang",
      description: "Bangunan industri dengan standar keselamatan tinggi"
    },
    {
      title: "Proyek Publik",
      category: "Fasilitas Umum",
      description: "Konstruksi fasilitas publik yang fungsional dan estetis"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Building2 className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                CV. FICESTA MANDIRI
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize text-sm font-medium transition-colors hover:text-blue-600 ${
                    activeSection === section ? 'text-blue-600' : 'text-slate-600'
                  }`}
                >
                  {section === 'home' ? 'Beranda' : 
                   section === 'about' ? 'Tentang' :
                   section === 'services' ? 'Layanan' :
                   section === 'portfolio' ? 'Portfolio' : 'Kontak'}
                </button>
              ))}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-4 py-2 space-y-1">
              {['home', 'about', 'services', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="block w-full text-left px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-blue-600 hover:bg-slate-50 capitalize"
                >
                  {section === 'home' ? 'Beranda' : 
                   section === 'about' ? 'Tentang' :
                   section === 'services' ? 'Layanan' :
                   section === 'portfolio' ? 'Portfolio' : 'Kontak'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                <TrendingUp className="w-4 h-4 mr-2" />
                Konstruksi Khusus Terpercaya
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  CV. FICESTA MANDIRI
                </span>
                <br />
                Solusi Konstruksi Profesional
              </h1>
              <p className="text-lg text-slate-600 leading-relaxed">
                Spesialis dalam konstruksi khusus lainnya. Kami menghadirkan solusi bangunan 
                inovatif dengan kualitas terbaik, didukung tim profesional berpengalaman 
                dan teknologi modern.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => scrollToSection('contact')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Konsultasi Gratis
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => scrollToSection('portfolio')}
                >
                  Lihat Portfolio
                </Button>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-slate-600">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">100%</div>
                  <div className="text-sm text-slate-600">Kepuasan Klien</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">5+</div>
                  <div className="text-sm text-slate-600">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-6"></div>
              <Card className="relative bg-white/80 backdrop-blur-sm border-0 shadow-2xl rounded-3xl p-8">
                <div className="space-y-6">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">Meta Ads Powered</h3>
                    <p className="text-slate-600">Strategi pemasaran digital untuk proyek Anda</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-blue-50 rounded-xl">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <Users className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">Target Audience</div>
                    </div>
                    <div className="text-center p-4 bg-purple-50 rounded-xl">
                      <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <TrendingUp className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-sm font-semibold text-slate-900">High Conversion</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">
              Tentang Kami
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Mengapa Memilih <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CV. FICESTA MANDIRI</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Kami adalah mitra terpercaya untuk semua kebutuhan konstruksi khusus Anda, 
              menggabungkan keahlian teknis dengan inovasi modern.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Bergaransi & Terpercaya</h3>
              <p className="text-slate-600">Setiap proyek kami kerjakan dengan standar kualitas tertinggi dan jaminan kepuasan.</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Tim Profesional</h3>
              <p className="text-slate-600">Didukung oleh tim ahli berpengalaman di bidang konstruksi khusus.</p>
            </Card>

            <Card className="p-6 border-0 shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Kualitas Premium</h3>
              <p className="text-slate-600">Menggunakan material terbaik dan teknologi konstruksi modern.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
              Layanan Kami
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Solusi Konstruksi Komprehensif
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Dari perencanaan hingga penyelesaian, kami menyediakan layanan konstruksi 
              yang lengkap untuk memenuhi kebutuhan spesifik Anda.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="p-6 border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 group">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Pelajari lebih lanjut <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 mb-4">
              Portfolio
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Proyek-Proyek Unggulan Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Bukti nyata komitmen kami terhadap kualitas dan kepuasan klien.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all group">
                <div className="h-48 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Building2 className="w-16 h-16 text-white/80" />
                  </div>
                </div>
                <CardContent className="p-6">
                  <Badge variant="secondary" className="mb-3">{item.category}</Badge>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 mb-4">
              Kontak Kami
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Mulai Proyek Anda Bersama Kami
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Tim profesional kami siap membantu mewujudkan visi konstruksi Anda.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">CV. FICESTA MANDIRI</h4>
                      <p className="text-slate-600">Spesialis Konstruksi Khusus Lainnya</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Alamat</h4>
                      <p className="text-slate-600">
                        Jalan Hayam Wuruk No. 42, Kel. Besusu Barat, 
                        Kec. Palu Timur, Kota Palu, Prov. Sulawesi Tengah
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Telepon</h4>
                      <p className="text-slate-600">085285703582</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Email</h4>
                      <p className="text-slate-600">info@ficestamandiri.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">Jam Operasional</h4>
                      <p className="text-slate-600">Senin - Jumat: 08:00 - 17:00</p>
                      <p className="text-slate-600">Sabtu: 08:00 - 12:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <h4 className="font-semibold text-slate-900 mb-4">Ikuti Kami</h4>
                <div className="flex space-x-4">
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Facebook className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Instagram className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full">
                    <Linkedin className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            <Card className="p-8 border-0 shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Nama Lengkap
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap Anda"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="email@example.com"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                    Nomor Telepon
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="08xxxxxxxxxx"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                    Pesan
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Jelaskan kebutuhan proyek Anda..."
                    rows={4}
                    className="w-full"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Kirim Pesan
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">CV. FICESTA MANDIRI</span>
              </div>
              <p className="text-slate-400 mb-4 max-w-md">
                Spesialis konstruksi khusus lainnya yang terpercaya dan profesional. 
                Solusi terbaik untuk kebutuhan bangunan Anda.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Instagram className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Layanan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="#" className="hover:text-white transition-colors">Konstruksi Bangunan</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Konstruksi Khusus</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Renovasi & Perbaikan</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Perencanaan Proyek</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Perusahaan</h4>
              <ul className="space-y-2 text-slate-400">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Tentang Kami</Link></li>
                <li><Link href="#contact" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>
          </div>

          <Separator className="my-8 bg-slate-800" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 CV. FICESTA MANDIRI. All rights reserved.
            </p>
            <p className="text-slate-400 text-sm mt-4 md:mt-0">
              Powered by <span className="text-blue-400">Meta Ads</span> Technology
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}