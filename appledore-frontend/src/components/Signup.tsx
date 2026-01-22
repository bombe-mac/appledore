import { useRef, useState } from "react"
import { Button } from "./Button"
import axios from "axios";
import { config } from "../config";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const usernameRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const signupHandler = async () => {
        const username = usernameRef.current?.value;
        const password = passwordRef.current?.value;

        if (!username || !password) {
            setError("Please fill in all fields");
            return;
        }

        try {
            setLoading(true);
            setError("");

            await axios.post(`${config.baseURL}/signup`, {
                username,
                password
            });

            navigate("/signin");

        } catch (err: any) {
            if (err.response?.data?.errors) {
                const zodErrors = err.response.data.errors;
                setError(zodErrors.map((e: any) => e.message).join(", "));
            } else if (err.response?.data?.message) {
                setError(err.response.data.message);
            } else {
                setError("Signup failed. Please try again.");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="w-full max-w-md">
                <div className="bg-white rounded-lg shadow-lg p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
                        <p className="text-gray-600 mt-2">Sign up to get started</p>
                    </div>

                    {/* Form */}
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Username
                            </label>
                            <input 
                                ref={usernameRef}
                                type="text" 
                                placeholder="Enter your username" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                                disabled={loading}
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <input 
                                ref={passwordRef}
                                type="password" 
                                placeholder="Enter your password" 
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                                disabled={loading}
                            />
                        </div>

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
                                {error}
                            </div>
                        )}

                        <Button 
                            size="sm" 
                            text={loading ? "Signing up..." : "Sign Up"} 
                            onClick={signupHandler}
                            disabled={loading}
                        />
                    </div>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{" "}
                            <button
                                onClick={() => navigate("/signin")}
                                className="text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Sign In
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};