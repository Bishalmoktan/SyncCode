import Editor from "@monaco-editor/react";
import { Label } from "./ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { LANGUAGE_MAPPING } from "@/data/language";
import { useState } from "react";

const EditorComponent = () => {
  const [language, setLanguage] = useState(LANGUAGE_MAPPING['js'].monaco);
  const [code, setCode] = useState(LANGUAGE_MAPPING['js'].boilerplate);

  const handleLanguageChange = (value: string) => {
    const selectedLanguage = Object.keys(LANGUAGE_MAPPING).find(
      (lang) => LANGUAGE_MAPPING[lang].monaco === value
    );
    if (selectedLanguage) {
      setLanguage(value);
      setCode(LANGUAGE_MAPPING[selectedLanguage].boilerplate);
    }
  };

  return (
    <div>
      <div className="p-4">
        <Label htmlFor="language">Language</Label>
        <Select
          value={language}
          onValueChange={handleLanguageChange}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            {Object.keys(LANGUAGE_MAPPING).map((lang) => (
              <SelectItem key={lang} value={LANGUAGE_MAPPING[lang].monaco}>
                {LANGUAGE_MAPPING[lang]?.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Editor
        height="90vh"
        theme="vs-dark"
        language={language}
        value={code}
        onChange={(newValue) => setCode(newValue || '')}
        options={{
          fontSize: 14,
          scrollBeyondLastLine: false,
        }}
      />
    </div>
  );
};

export default EditorComponent;
