import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import QuizScreen from "../pages/QuizScreen"
import APIHandeling from "../pages/API HandelingScreen"
import NotFound from "../pages/notfound"
import Notes from "../pages/notes"
import Login from "../pages/login"
import Users from "../pages/users"

export default function AppRoute() {
    return <>
        <Router>
            <nav>
                <Link style={{ padding: 10 }} to="quizscreen">Quiz Screen</Link>
                <Link style={{ padding: 10 }} to="apiscreen">Api Handeling Screen</Link>
                <Link style={{ padding: 10 }} to="notes">Notes</Link>
                <Link style={{ padding: 10 }} to="login">Login</Link>
            </nav>
            <Routes>
                <Route path="quizscreen" element={<QuizScreen />} />
                <Route path="apiscreen" element={<APIHandeling />} />
                <Route path="notes" element={<Notes />} />
                <Route path="login" element={<Login />} />
                <Route path="users" element={<Users />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    </>
}