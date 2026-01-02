'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowLeft, FileText, Shield, AlertCircle, CheckCircle, Gavel, Users, Building } from 'lucide-react'
import Link from 'next/link'

export default function TermsPage() {
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
                  <FileText className="w-4 h-4 text-white" />
                </div>
                <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Terms & Conditions
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
            Syarat & Ketentuan <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CV. FICESTA MANDIRI</span>
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Syarat dan ketentuan ini mengatur penggunaan layanan konstruksi dan website kami. 
            Dengan menggunakan layanan kami, Anda menyetujui syarat dan ketentuan berikut.
          </p>
          <p className="text-sm text-slate-500 mt-4">Terakhir diperbarui: 1 Januari 2024</p>
        </div>

        {/* Key Principles */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 border-0 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Keamanan</h3>
            <p className="text-slate-600 text-sm">Kami memprioritaskan keselamatan dan keamanan dalam setiap proyek.</p>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
              <CheckCircle className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Kualitas</h3>
            <p className="text-slate-600 text-sm">Komitmen kami terhadap kualitas terbaik dalam setiap pekerjaan.</p>
          </Card>

          <Card className="p-6 border-0 shadow-lg">
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900 mb-2">Profesionalisme</h3>
            <p className="text-slate-600 text-sm">Layanan profesional dengan transparansi dan integritas.</p>
          </Card>
        </div>

        {/* Terms Content */}
        <div className="space-y-8">
          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Gavel className="w-6 h-6 mr-3 text-blue-600" />
              Definisi dan Interpretasi
            </h2>
            
            <div className="space-y-4 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Definisi Umum</h3>
                <div className="bg-slate-50 rounded-lg p-4 space-y-2">
                  <p><strong>"Perusahaan"</strong> merujuk pada CV. FICESTA MANDIRI</p>
                  <p><strong>"Klien"</strong> merujuk pada individu atau perusahaan yang menggunakan layanan kami</p>
                  <p><strong>"Layanan"</strong> merujuk pada semua jasa konstruksi yang kami sediakan</p>
                  <p><strong>"Proyek"</strong> merujuk pada pekerjaan konstruksi tertentu yang disepakati</p>
                  <p><strong>"Website"</strong> merujuk pada situs web resmi CV. FICESTA MANDIRI</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Lingkup Layanan</h3>
                <p>Layanan kami meliputi:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Konstruksi bangunan komersial dan residensial</li>
                  <li>Konstruksi khusus lainnya sesuai kebutuhan klien</li>
                  <li>Renovasi dan perbaikan bangunan</li>
                  <li>Konsultasi dan perencanaan proyek</li>
                  <li>Manajemen proyek konstruksi</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Building className="w-6 h-6 mr-3 text-purple-600" />
              Syarat Penggunaan Layanan
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kelayakan (Eligibility)</h3>
                <p>Untuk menggunakan layanan kami, Anda harus:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Berusia minimal 18 tahun atau memiliki wewenang hukum</li>
                  <li>Memiliki kapasitas hukum untuk membuat kontrak</li>
                  <li>Memberikan informasi yang akurat dan lengkap</li>
                  <li>Memiliki sumber daya finansial yang memadai</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Pendaftaran dan Akun</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Kewajiban Pendaftaran</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Memberikan data pribadi yang valid dan dapat diverifikasi</li>
                    <li>Menjaga kerahasiaan informasi akun</li>
                    <li>Memberitahukan kami segera jika ada penggunaan tidak sah</li>
                    <li> Bertanggung jawab atas semua aktivitas di akun Anda</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Batasan Penggunaan</h3>
                <p>Anda setuju untuk tidak:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Memberikan informasi palsu atau menyesatkan</li>
                  <li>Menggunakan layanan untuk kegiatan ilegal</li>
                  <li>Mengganggu atau merusak sistem kami</li>
                  <li>Menyalin atau mendistribusikan konten tanpa izin</li>
                  <li>Melakukan spam atau penipuan</li>
                </ul>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-600" />
              Kontrak dan Perjanjian Proyek
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Proses Kontrak</h3>
                <ol className="list-decimal list-inside space-y-2 ml-4">
                  <li>Konsultasi awal dan diskusi kebutuhan</li>
                  <li>Survei lokasi dan penilaian teknis</li>
                  <li>Penyusunan penawaran harga dan spesifikasi</li>
                  <li>Negosiasi dan kesepakatan syarat</li>
                  <li>Penandatanganan kontrak resmi</li>
                  <li>Perencanaan detail dan jadwal proyek</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Elemen Kontrak Wajib</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Informasi Proyek</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Lokasi dan alamat lengkap</li>
                      <li>• Luas area konstruksi</li>
                      <li>• Jenis bangunan</li>
                      <li>• Spesifikasi teknis</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Syarat Finansial</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Total nilai kontrak</li>
                      <li>• Jadwal pembayaran</li>
                      <li>• Metode pembayaran</li>
                      <li>• Kebijakan perubahan harga</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Jadwal dan Waktu</h3>
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Ketentuan Waktu</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Waktu penyelesaian ditentukan dalam kontrak</li>
                    <li>Perpanjangan waktu dapat dinegosiasikan jika ada force majeure</li>
                    <li>Keterlambatan akibat klien akan dikenakan biaya tambahan</li>
                    <li>Progress report akan disediakan secara berkala</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-purple-600" />
              Kewajiban dan Tanggung Jawab
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kewajiban Perusahaan</h3>
                <p>CV. FICESTA MANDIRI berkomitmen untuk:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Menyelesaikan proyek sesuai spesifikasi dan kualitas yang disepakati</li>
                  <li>Mematuhi semua regulasi dan standar keselamatan konstruksi</li>
                  <li>Memberikan jaminan untuk pekerjaan yang dilakukan</li>
                  <li>Menyediakan asuransi untuk pekerja dan proyek</li>
                  <li>Memberikan dokumentasi lengkap setelah penyelesaian</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kewajiban Klien</h3>
                <p>Sebagai klien, Anda wajib:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Memberikan akses ke lokasi proyek sesuai jadwal</li>
                  <li>Memproses pembayaran sesuai kesepakatan</li>
                  <li>Memberikan informasi yang diperlukan untuk kelancaran proyek</li>
                  <li>Mengurus perizinan yang menjadi tanggung jawab klien</li>
                  <li>Melakukan inspecti dan penerimaan hasil pekerjaan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Batasan Tanggung Jawab</h3>
                <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Force Majeure</h4>
                  <p>Kami tidak bertanggung jawab atas keterlambatan atau kegagalan akibat:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Bencana alam (gempa, banjir, tsunami)</li>
                    <li>Perubahan regulasi pemerintah</li>
                    <li>Kerusakan sosial atau politik</li>
                    <li>Pemogokan umum</li>
                    <li>Kelangkaan material yang tidak dapat diprediksi</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <AlertCircle className="w-6 h-6 mr-3 text-blue-600" />
              Pembayaran dan Kebijakan Harga
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Struktur Pembayaran</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Pembayaran Bertahap</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Uang muka: 30-50%</li>
                      <li>• Progress 1: 20-30%</li>
                      <li>• Progress 2: 20-30%</li>
                      <li>• Penyelesaian: 10-20%</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold mb-2">Metode Pembayaran</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Transfer bank</li>
                      <li>• Cek/bilyet giro</li>
                      <li>• Kartu kredit (untuk jumlah tertentu)</li>
                      <li>• Pembayaran tunai (dengan kwitansi)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kebijakan Perubahan Harga</h3>
                <p>Harga dapat berubah jika:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Ada perubahan spesifikasi atau scope pekerjaan</li>
                  <li>Kenaikan harga material di atas 10%</li>
                  <li>Perubahan regulasi yang mempengaruhi biaya</li>
                  <li>Kondisi lapangan yang tidak terduga</li>
                </ul>
                <p className="mt-3 text-sm italic">Semua perubahan harga harus disetujui secara tertulis oleh kedua belah pihak.</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kebijakan Pembatalan</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Syarat Pembatalan</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Pembatalan oleh klien:</strong> Uang muka tidak dapat dikembalikan</li>
                    <li><strong>Pembatalan oleh perusahaan:</strong> Pengembalian 100% pembayaran</li>
                    <li><strong>Penghentian di tengah proyek:</strong> Pembayaran sesuai progress yang telah dicapai</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <CheckCircle className="w-6 h-6 mr-3 text-purple-600" />
              Jaminan dan Garansi
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Masa Garansi</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="p-4 bg-green-50 rounded-lg text-center">
                    <h4 className="font-semibold text-green-800">Struktur</h4>
                    <p className="text-2xl font-bold text-green-600 my-2">5 Tahun</p>
                    <p className="text-sm">Struktur utama bangunan</p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-lg text-center">
                    <h4 className="font-semibold text-blue-800">Finishing</h4>
                    <p className="text-2xl font-bold text-blue-600 my-2">1 Tahun</p>
                    <p className="text-sm">Cat, keramik, dan finishing</p>
                  </div>
                  <div className="p-4 bg-purple-50 rounded-lg text-center">
                    <h4 className="font-semibold text-purple-800">Instalasi</h4>
                    <p className="text-2xl font-bold text-purple-600 my-2">6 Bulan</p>
                    <p className="text-sm">Listrik, air, dan AC</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Layanan Purnajual</h3>
                <p>Kami menyediakan:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Inspeksi gratis setelah 1 bulan penyelesaian</li>
                  <li>Perbaikan garansi dalam 7 hari kerja</li>
                  <li>Konsultasi teknis gratis selama masa garansi</li>
                  <li>Dokumentasi lengkap dan manual perawatan</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Klaim Garansi</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Prosedur Klaim</h4>
                  <ol className="list-decimal list-inside space-y-1 ml-4">
                    <li>Laporkan masalah via email atau telepon</li>
                    <li>Sertakan foto/video dan deskripsi detail</li>
                    <li>Tim kami akan survei dalam 3 hari kerja</li>
                    <li>Perbaikan akan dilakukan sesuai kesepakatan</li>
                  </ol>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
              <Users className="w-6 h-6 mr-3 text-blue-600" />
              Hak Kekayaan Intelektual
            </h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Kepemilikan Konten</h3>
                <p>Semua konten di website kami milik CV. FICESTA MANDIRI:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Desain, gambar teknis, dan blueprint</li>
                  <li>Teks, grafik, dan multimedia</li>
                  <li>Logo, merek dagang, dan identitas perusahaan</li>
                  <li>Metode konstruksi dan teknik inovatif</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Penggunaan yang Diizinkan</h3>
                <p>Anda diperbolehkan:</p>
                <ul className="list-disc list-inside space-y-2 ml-4 mt-2">
                  <li>Menggunakan informasi untuk keperluan pribadi</li>
                  <li>Membagikan konten dengan menyertakan sumber</li>
                  <li>Mencetak materi untuk referensi proyek</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Penggunaan yang Dilarang</h3>
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Pelanggaran Hak Cipta</h4>
                  <p>Dilarang keras untuk:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                    <li>Menyalin ulang konten tanpa izin</li>
                    <li>Menggunakan desain kami untuk proyek lain</li>
                    <li>Menjual atau mendistribusikan materi kami</li>
                    <li>Menampilkan konten sebagai milik Anda</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Penyelesaian Sengketa</h2>
            
            <div className="space-y-6 text-slate-600">
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Proses Mediasi</h3>
                <p>Jika terjadi sengketa, kami mengikuti prosedur berikut:</p>
                <ol className="list-decimal list-inside space-y-2 ml-4 mt-2">
                  <li>Negosiasi langsung antara kedua belah pihak</li>
                  <li>Mediasi dengan pihak ketiga netral</li>
                  <li>Konsultasi hukum jika diperlukan</li>
                  <li>Penyelesaian melalui pengadilan sebagai upaya terakhir</li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Yurisdiksi</h3>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-slate-900 mb-2">Hukum yang Berlaku</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Semua kontrak diatur oleh hukum Indonesia</li>
                    <li>Sengketa akan diselesaikan di pengadilan Palu</li>
                    <li>Bahasa resmi untuk dokumen hukum adalah Bahasa Indonesia</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Perubahan Syarat & Ketentuan</h2>
            
            <div className="space-y-4 text-slate-600">
              <p>Kami berhak mengubah syarat dan ketentuan ini kapan saja dengan:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Pemberitahuan minimal 30 hari sebelum perubahan berlaku</li>
                <li>Publikasi di website dan email ke klien aktif</li>
                <li>Kesempatan bagi klien untuk menolak perubahan material</li>
              </ul>
              
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mt-6">
                <h4 className="font-semibold text-slate-900 mb-2">Kelanjutan Penggunaan</h4>
                <p>Penggunaan layanan kami setelah perubahan berlaku menunjukkan persetujuan Anda terhadap syarat dan ketentuan yang diperbarui.</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 border-0 shadow-lg">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Kontak dan Informasi</h2>
            
            <div className="space-y-6 text-slate-600">
              <p>Untuk pertanyaan mengenai syarat dan ketentuan ini, hubungi:</p>
              
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-slate-900">CV. FICESTA MANDIRI</h4>
                    <p className="text-sm">Legal & Contract Department</p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm font-medium text-slate-700">Email:</p>
                      <p className="text-blue-600">legal@ficestamandiri.com</p>
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

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-slate-900 mb-2">Jam Operasional Legal</h4>
                <p>Senin - Jumat: 09:00 - 17:00 WITA</p>
                <p>Sabtu: 09:00 - 12:00 WITA</p>
              </div>
            </div>
          </Card>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="p-8 border-0 shadow-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <h2 className="text-2xl font-bold mb-4">Siap Memulai Proyek Anda?</h2>
            <p className="mb-6 text-blue-100">
              Tim profesional kami siap membantu mewujudkan konstruksi impian Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-blue-50">
                  Konsultasi Gratis
                </Button>
              </Link>
              <Link href="/privacy">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Lihat Privacy Policy
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
                <FileText className="w-4 h-4 text-white" />
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
            © 2024 CV. FICESTA MANDIRI. All rights reserved. Professional construction services since 2019.
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