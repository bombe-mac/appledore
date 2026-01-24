import React, { useState } from 'react';
import { X } from '../icons/X';
import { Youtube } from '../icons/Youtube';
import { Page } from '../icons/Page';
import { Blog } from '../icons/Blog';
import { Links } from '../icons/Links';
import { config } from '../config';
import axios from 'axios';
type ModalProps = {
  open: boolean;
  onClose: () => void;
};

type ContentType = 'X' | 'videos' | 'document' | 'blog' | 'link';

const tagConfig: Record<ContentType, { label: string; color: string; emoji: React.ReactNode }> = {
  X: { label: 'Tweet', color: 'bg-sky-100 text-sky-700 border-sky-300 hover:bg-sky-200', emoji: <X /> },
  videos: { label: 'Video', color: 'bg-purple-100 text-purple-700 border-purple-300 hover:bg-purple-200', emoji: <Youtube /> },
  document: { label: 'Document', color: 'bg-blue-100 text-blue-700 border-blue-300 hover:bg-blue-200', emoji: <Page /> },
  blog: { label: 'Blog', color: 'bg-emerald-100 text-emerald-700 border-emerald-300 hover:bg-emerald-200', emoji: <Blog /> },
  link: { label: 'Link', color: 'bg-orange-100 text-orange-700 border-orange-300 hover:bg-orange-200', emoji: <Links />},
};

const AddContentModal = ({ open, onClose }: ModalProps) => {
    const [title, setTitle] = useState('');
    const [url, setUrl] = useState('');
    const [selectedTag, setSelectedTag] = useState<ContentType>('link');
    const [loading, setLoading] = useState(false);

   const handleSubmit = async () => {
    try {
        const token = localStorage.getItem('token');
        setLoading(true);
        
        await axios.post(
            `${config.baseURL}/content`,
            // Second argument: data
            {
                link: url,
                title: title,
                type: selectedTag
            },
            // Third argument: config (headers)
            {
                headers: {
                    'token': token,
                }
            }
        );
        
        onClose(); 
    } catch (error) {
        console.log(error);
    } finally {
        setLoading(false);
    }
};
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-800">Add Content</h2>
          <button
            onClick={onClose}
            className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors text-xl leading-none"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5">
          {/* Title Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter a descriptive title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          {/* URL Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Link
            </label>
            <input
              type="text"
              placeholder="https://example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent outline-none transition-all placeholder:text-gray-400"
            />
          </div>

          {/* Tag Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Content Type
            </label>
            <div className="flex flex-wrap gap-2">
              {(Object.keys(tagConfig) as ContentType[]).map((tag) => {
                const config = tagConfig[tag];
                const isSelected = selectedTag === tag;
                return (
                  <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 font-medium text-sm transition-all ${
                      isSelected
                        ? config.color.replace('hover:bg-', 'bg-').replace(/bg-\w+-100/, (m) => m.replace('100', '200'))
                        : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-base">{config.emoji}</span>
                    {config.label}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex gap-3 p-6 bg-gray-50 rounded-b-2xl border-t border-gray-100">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-3 text-gray-700 font-medium rounded-lg border-2 border-gray-200 hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="flex-1 px-4 py-3 bg-black text-white font-medium rounded-lg hover:bg-gray-700 transition-colors shadow-sm hover:shadow-md"
          >
            Add Content
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddContentModal;