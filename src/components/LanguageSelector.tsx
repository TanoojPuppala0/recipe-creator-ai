
import { useState, useEffect } from 'react';
import { Check, ChevronsUpDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';

const languages = [
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Spanish' },
  { value: 'fr', label: 'French' },
  { value: 'de', label: 'German' },
  { value: 'it', label: 'Italian' },
  { value: 'zh', label: 'Chinese' },
  { value: 'ja', label: 'Japanese' },
  { value: 'ko', label: 'Korean' },
  { value: 'ar', label: 'Arabic' },
  { value: 'hi', label: 'Hindi' },
];

interface LanguageSelectorProps {
  onChange: (value: string) => void;
}

const LanguageSelector = ({ onChange }: LanguageSelectorProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('en');

  useEffect(() => {
    onChange(value);
  }, [value, onChange]);

  return (
    <div className="w-full md:w-[200px]">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between bg-white bg-opacity-80 backdrop-blur-md border border-gray-200 shadow-sm transition-all duration-300 hover:bg-opacity-100"
          >
            {value ? languages.find((language) => language.value === value)?.label : 'Select language...'}
            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 bg-white">
          <div className="w-full max-h-[300px] overflow-y-auto rounded-md">
            <div className="flex flex-col w-full py-2">
              {languages.map((language) => (
                <div
                  key={language.value}
                  className={cn(
                    "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-blue-50",
                    value === language.value && "bg-blue-50"
                  )}
                  onClick={() => {
                    setValue(language.value);
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === language.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {language.label}
                </div>
              ))}
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default LanguageSelector;
