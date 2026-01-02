'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, Shield, Eye, Lock, Database, UserCheck, FileText } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPage() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 backdrop-blur-sm bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-slate-600 hover:text-blue-600">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Kembali
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Privacy Policy
                </span>
              </div>
            </div>
            <Link href="/">
              <span className="text-sm font-medium text-blue-600 hover:text-blue-700">
                CV. FICESTA MANDIRI
              </span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Kebijakan Privasi <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CV. FICESTA MANDIRI</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Kami berkomitmen untuk melindungi privasi dan keamanan data pribadi Anda. 
            Kebijakan ini menjelaskan bagaimana kami mengumpulkan, menggunakan, dan melindungi informasi Anda.
          </p>
          <p className="text-sm text-slate-500 mt-4">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        {/* Privacy Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-0 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Eye className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Transparansi</h3>
            <p className="text-slate-600 text-sm">Kami jelas tentang data yang kami kumpulkan dan bagaimana menggunakannya.</p>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <Lock className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Keamanan</h3>
            <p className="text-slate-600 text-sm">Data Anda dilindungi dengan enkripsi dan keamanan berlapis.</p>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <UserCheck className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Kontrol</h3>
            <p className="text-slate-600 text-sm">Anda memiliki kontrol penuh atas data pribadi Anda.</p>
          </Card>
        </div>

        {/* Privacy Policy Content */}
        <div className="space-y-8">
          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Database className="w-6 h-6 mr-3 text-blue-600" />
              Informasi yang Kami Kumpulkan
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Pribadi</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Nama lengkap dan informasi identitas</li>
                  <li>Alamat email dan nomor telepon</li>
                  <li>Alamat fisik dan lokasi proyek</li>
                  <li>Informasi perusahaan dan jabatan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Proyek</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Detail kebutuhan konstruksi</li>
                  <li>Spesifikasi teknis proyek</li>
                  <li>Dokumen perencanaan dan gambar</li>
                  <li>Informasi anggaran dan jadwal</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Data Penggunaan</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Riwayat komunikasi dengan tim kami</li>
                  <li>Data analitik website dan interaksi</li>
                  <li>Informasi perangkat dan browser</li>
                  <li>Cookie dan data pelacakan</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-purple-600" />
              Cara Kami Menggunakan Data Anda
            </h2>
            
            <div className="space-y-4 text-slate-600">
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Layanan Konstruksi</h4>
                <p>Untuk menyediakan layanan konstruksi, konsultasi, dan dukungan teknis sesuai kebutuhan proyek Anda.</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Komunikasi</h4>
                <p>Untuk menghubungi Anda mengenai penawaran, update proyek, dan informasi layanan terkait.</p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Penawaran Harga</h4>
                <p>Untuk membuat dan mengirimkan penawaran harga yang disesuaikan dengan kebutuhan spesifik Anda.</p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg">
                <h4 className="font-semibold text-slate-900 mb-2">Peningkatan Layanan</h4>
                <p>Untuk menganalisis dan meningkatkan kualitas layanan kami berdasarkan feedback dan kebutuhan klien.</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-blue-600" />
              Perlindungan Data Anda
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Keamanan Teknis</h3>
                <p>Kami menerapkan langkah-langkah keamanan berikut:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Enkripsi data selama transmisi dan penyimpanan</li>
                  <li>Akses terbatas ke data pribadi</li>
                  <li>Backup data teratur dan aman</li>
                  <li>Monitoring keamanan 24/7</li>
                  <li>Update sistem keamanan berkala</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kebijakan Internal</h3>
                <p>Semua karyawan dan mitra CV. FICESTA MANDIRI wajib:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-3">
                  <li>Menandatangani perjanjian kerahasiaan</li>
                  <li>Mengikuti training keamanan data</li>
                  <li>Mematuhi protokol penanganan data</li>
                  <li>Melaporkan insiden keamanan segera</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Hak Anda Sebagai Pengguna</h2>
            
            <div className="space-y-4 text-slate-600">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Akses Data</h4>
                <p>Anda berhak meminta salinan semua data pribadi yang kami simpan tentang Anda.</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Koreksi Data</h4>
                <p>Anda dapat memperbarui atau memperbaiki data pribadi yang tidak akurat.</p>
              </div>

              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Penghapusan Data</h4>
                <p>Anda dapat meminta penghapusan data pribadi Anda, dengan pengecualian tertentu sesuai hukum.</p>
              </div>

              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-semibold text-slate-900 mb-2">Portabilitas Data</h4>
                <p>Anda dapat meminta transfer data Anda ke layanan lain dalam format yang dapat dibaca.</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Berbagi Data dengan Pihak Ketiga</h2>
            
            <div className="space-y-6 text-slate-600">
              <p>Kami tidak menjual data pribadi Anda kepada pihak ketiga. Kami hanya membagikan data dalam kondisi berikut:</p>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Mitra Bisnis Terpercaya</h4>
                <p>Untuk menyediakan layanan konstruksi, kami mungkin berbagi data dengan:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Supplier material bangunan</li>
                  <li>Kontraktor sub-mitra</li>
                  <li>Konsultan teknis</li>
                  <li>Layanan pengiriman dan logistik</li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Kewajiban Hukum</h4>
                <p>Kami akan membagi data jika diwajibkan oleh:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Perintah pengadilan atau penegak hukum</li>
                  <li>Regulasi pemerintah yang berlaku</li>
                  <li>Untuk melindungi hak dan keamanan kami</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Cookie dan Teknologi Pelacakan</h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Jenis Cookie yang Kami Gunakan</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Cookie Esensial</h4>
                    <p className="text-sm">Diperlukan untuk fungsi dasar website dan keamanan.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Cookie Analitik</h4>
                    <p className="text-sm">Membantu kami memahami cara pengguna berinteraksi dengan website.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Cookie Kinerja</h4>
                    <p className="text-sm">Mengingat preferensi Anda untuk pengalaman yang lebih baik.</p>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Cookie Pemasaran</h4>
                    <p className="text-sm">Digunakan untuk menampilkan konten yang relevan (Meta Ads).</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Pengelolaan Cookie</h4>
                <p>Anda dapat mengatur preferensi cookie melalui pengaturan browser atau banner cookie di website kami.</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Penyimpanan Data</h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Durasi Penyimpanan</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Data Proyek Aktif:</strong> Disimpan selama proyek berlangsung + 5 tahun</li>
                  <li><strong>Data Komunikasi:</strong> Disimpan selama 3 tahun dari interaksi terakhir</li>
                  <li><strong>Data Analitik:</strong> Disimpan selama 2 tahun</li>
                  <li><strong>Data Keuangan:</strong> Disimpan selama 10 tahun sesuai ketentuan fiskal</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Lokasi Penyimpanan</h3>
                <p>Data Anda disimpan secara aman di:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Server aman di Indonesia</li>
                  <li>Cloud storage dengan enkripsi end-to-end</li>
                  <li>Backup fisik di lokasi yang aman</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Perubahan Kebijakan Privasi</h2>
            
            <div className="space-y-4 text-slate-600">
              <p>Kami dapat memperbarui kebijakan privasi ini dari waktu ke waktu untuk:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Mematuhi perubahan regulasi dan hukum</li>
                <li>Meningkatkan praktik privasi kami</li>
                <li>Menyesuaikan dengan perkembangan layanan</li>
                <li>Merespons feedback dari pengguna</li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-slate-900 mb-2">Pemberitahuan Perubahan</h4>
                <p>Perubahan signifikan akan kami beritahukan melalui:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Email ke alamat yang terdaftar</li>
                  <li>Notifikasi di website</li>
                  <li>Pop-up saat kunjungan berikutnya</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kontak untuk Privasi</h2>
            
            <div className="space-y-6 text-slate-600">
              <p>Jika Anda memiliki pertanyaan atau keluhan mengenai privasi data Anda, silakan hubungi:</p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">CV. FICESTA MANDIRI</h4>
                    <p className="text-sm">Privacy Officer</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-700">Email:</p>
                      <p className="text-blue-600">privacy@ficestamandiri.com</p>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-700">Telepon:</p>
                      <p className="text-blue-600">085285703582</p>
                    </div>
                    <div className="md:col-span-2">
                      <p className="text-sm font-medium text-slate-700">Alamat:</p>
                      <p className="text-sm">
                        Jalan Hayam Wuruk No. 42, Kel. Besusu Barat, 
                        Kec. Palu Timur, Kota Palu, Prov. Sulawesi Tengah
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Waktu Respons</h4>
                <p>Kami akan merespons permintaan privasi Anda dalam:</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Permintaan sederhana: 7 hari kerja</li>
                  <li>Permintaan kompleks: 30 hari kerja</li>
                  <li>Keluhan: 14 hari kerja untuk respons awal</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Butuh Bantuan?</h2>
            <p className="mb-6 text-blue-100">
              Tim kami siap membantu menjawab pertanyaan mengenai privasi data Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Hubungi Kami
                </Button>
              </Link>
              <Link href="/terms">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Lihat Terms & Conditions
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
              <span className="text-lg font-bold">CV. FICESTA MANDIRI</span>
            </div>
            <div className="flex space-x-6 text-sm text-slate-400">
              <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
              <Link href="/" className="hover:text-white transition-colors">Beranda</Link>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-800 text-center text-sm text-slate-400">
            © 2024 CV. FICESTA MANDIRI. All rights reserved. Protected by enterprise-grade security.
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-110 flex items-center justify-center z-30"
        aria-label="Back to top"
      >
        <ArrowLeft className="w-5 h-5 rotate-90" />
      </button>
    </div>
  )
}