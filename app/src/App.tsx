import { lazy, Suspense, type ReactNode } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { AppShell } from './app/AppShell'
import { AppServicesProvider } from './app/AppServices'
import { AccountPage } from './features/account/AccountPage'
import { HomePage } from './features/home/HomePage'
import { LearnPage } from './features/learn/LearnPage'
import { ReviewPage } from './features/review/ReviewPage'
import { SessionPage } from './features/session/SessionPage'
import './App.css'

const LibraryPage = lazy(() => import('./features/library/LibraryPage').then((module) => ({ default: module.LibraryPage })))
const ProgressPage = lazy(() => import('./features/progress/ProgressPage').then((module) => ({ default: module.ProgressPage })))
const CustomPracticePage = lazy(() => import('./features/practice/CustomPracticePage').then((module) => ({ default: module.CustomPracticePage })))
const WritingPracticePage = lazy(() => import('./features/writing/WritingPracticePage').then((module) => ({ default: module.WritingPracticePage })))

function DeferredRoute({ children }: { children: ReactNode }) {
  return <Suspense fallback={<section className="page-stack"><p className="loading-copy" role="status">Đang tải tính năng…</p></section>}>{children}</Suspense>
}

export function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route index element={<HomePage />} />
        <Route path="learn" element={<LearnPage />} />
        <Route path="review" element={<ReviewPage />} />
        <Route path="library" element={<DeferredRoute><LibraryPage /></DeferredRoute>} />
        <Route path="progress" element={<DeferredRoute><ProgressPage /></DeferredRoute>} />
        <Route path="practice/custom" element={<DeferredRoute><CustomPracticePage /></DeferredRoute>} />
        <Route path="practice/writing" element={<DeferredRoute><WritingPracticePage /></DeferredRoute>} />
        <Route path="account" element={<AccountPage />} />
        <Route path="session/:sessionKind/:topicId?" element={<SessionPage />} />
      </Route>
    </Routes>
  )
}

export default function App() {
  return <BrowserRouter><AppServicesProvider><AppRoutes /></AppServicesProvider></BrowserRouter>
}
