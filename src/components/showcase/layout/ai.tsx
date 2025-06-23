import {
  ArrowUpIcon,
  Globe,
  BrainCog,
  Mic,
  Bot,
  User,
} from "lucide-react";
import TypographyH1 from "../../typography/h1";
import TypographyParagraph from "../../typography/paragraph";
import { useEffect, useRef, useState } from "react";
import { Button } from "../../shadcn/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../shadcn/select";
import { Toggle } from "../../shadcn/toggle";

interface Message {
  id: number;
  text: string;
  isAI: boolean;
  timestamp: Date;
}

const aiResponses = [
  "That's an interesting question! Let me think about that for a moment.",
  "I understand what you're asking. Here's my perspective on that topic.",
  "That's a great point you've raised. I'd love to explore that further with you.",
  "I appreciate you sharing that with me. Let me provide some insights.",
  "That's quite fascinating! I have some thoughts on that subject.",
  "I see where you're coming from. Allow me to offer a different viewpoint.",
  "That's a complex topic with many layers. Let me break it down for you.",
  "I find that particularly intriguing. Here's what I think about it.",
  "That's a thoughtful question that deserves a comprehensive answer.",
  "I'm glad you brought that up. It's something worth discussing in detail.",
  "That resonates with me. I have some experience with similar situations.",
  "I can definitely help you with that. Let me share what I know.",
  "That's an excellent observation. You've touched on something important.",
  "I understand your concern. Let me address that point by point.",
  "That's a valid question that many people wonder about.",
  "I appreciate your curiosity about this topic. Here's my take on it.",
  "That's something I've been thinking about recently as well.",
  "You've raised a crucial point that's worth exploring further.",
  "That's a multifaceted issue with several possible approaches.",
  "I'm happy to discuss that with you. It's a topic close to my heart.",
  "That's an insightful question that shows you're really thinking deeply.",
  "I find that perspective quite compelling. Let me add to that thought.",
  "That's exactly the kind of question that leads to meaningful discussions.",
  "I can see why that would be on your mind. It's certainly relevant.",
  "That's a topic I'm passionate about. I'd love to share my thoughts.",
  "You've identified something really important there. Well observed!",
  "That's a question that deserves careful consideration and analysis.",
  "I'm impressed by your line of thinking. You're asking the right questions.",
  "That's something that has broader implications worth discussing.",
  "I believe that's a question many people share, and for good reason.",
];

export default function AIChatContainer() {
  const [prompt, setPrompt] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getRandomResponse = () => {
    const randomIndex = Math.floor(Math.random() * aiResponses.length);
    return aiResponses[randomIndex];
  };

  const handleSendMessage = () => {
    if (prompt.trim() === "") return;

    const userMessage = {
      id: Date.now(),
      text: prompt,
      isAI: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setPrompt("");
    setIsTyping(true);

    setTimeout(
      () => {
        const aiMessage = {
          id: Date.now() + 1,
          text: getRandomResponse(),
          isAI: true,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, aiMessage]);
        setIsTyping(false);
      },
      1000 + Math.random() * 2000,
    );
  };

  const formatTime = (timestamp: Date) => {
    return timestamp.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.max(textarea.scrollHeight, 24)}px`;
    }
  };
  useEffect(() => {
    adjustTextareaHeight();
  }, [prompt]);
  return (
    <div className="w-full h-full flex flex-col justify-between p-8 items-center">
      {messages.length === 0 && (
        <div className="mt-4 space-y-2 text-center">
          <TypographyH1 style={{
            background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--foreground)))',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }} className="font-bold text-4xl text-muted-foreground">
            Hello Jair!
          </TypographyH1>
          <TypographyParagraph className="text-xl text-muted-foreground">
            How can I help you today?
          </TypographyParagraph>
        </div>
      )}

      <div className="w-full overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.isAI ? "justify-start" : "justify-end"}`}
          >
            <div
              className={`flex items-start space-x-2 ${message.isAI ? "flex-row" : "flex-row-reverse space-x-reverse"}`}
            >
              <div
                className={`w-8 h-8  rounded-full flex items-center justify-center flex-shrink-0 ${
                  message.isAI ? "bg-muted" : "bg-primary"
                }`}
              >
                {message.isAI ? (
                  <Bot className="w-4 h-4 text-muted-foreground" />
                ) : (
                  <User className="w-4 h-4 text-primary-foreground" />
                )}
              </div>
              <div
                className={`rounded-2xl px-4 py-3  ${
                  message.isAI
                    ? "bg-card text-card-foreground "
                    : "bg-muted text-foreground"
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs text-muted-foreground mt-1 `}>
                  {formatTime(message.timestamp)}
                </p>
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-2 max-w-xs lg:max-w-md">
              <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-muted-foreground" />
              </div>
              <div className="bg-muted rounded-2xl px-4 py-3 ">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="bg-card border p-4 px-6 mb-8 rounded-2xl   w-full ">
        <div className="flex flex-grow flex-row items-start h-fit">
          <textarea
            ref={textareaRef}
            className="flex  bg-transparent resize-none w-full border-none rounded-md border text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-0 min-h-[24px] max-h-[200px] overflow-y-auto"
            value={prompt}
            placeholder="Say something..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
                setPrompt("");
                if (textareaRef.current) {
                  textareaRef.current.style.height = "24px";
                }
              }
            }}
            onChange={(e) => {
              setPrompt(e.target.value);
              adjustTextareaHeight();
            }}
            rows={1}
            style={{ height: "24px" }}
          />
        </div>

        <div className="flex justify-between w-full mt-4">
          <div className="flex items-center space-x-2">
            <Select defaultValue="o4-mini">
              <SelectTrigger className="w-[180px] ">
                <SelectValue placeholder="Select your AI Model" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="gpt-4">GTP-4.1</SelectItem>
                <SelectItem value="gpt-4o">GTP-4o</SelectItem>
                <SelectItem value="gpt-4o-mini">GTP-4o.mini</SelectItem>
                <SelectItem value="gpt-4o-nano">GTP-4o.nano</SelectItem>
                <SelectItem value="o4-mini">o4-mini</SelectItem>
                <SelectItem value="o4">o4</SelectItem>
                <SelectItem value="o3-mini">o3-mini</SelectItem>
                <SelectItem value="o3">o3</SelectItem>
                <SelectItem value="o1">o1</SelectItem>
                <SelectItem value="o1-mini">o1-mini</SelectItem>
              </SelectContent>
            </Select>
            <Toggle className="text-muted-foreground">
              <Globe />
              <TypographyParagraph>Websearch</TypographyParagraph>
            </Toggle>
            <Toggle className="text-muted-foreground">
              <BrainCog />
              <TypographyParagraph>Reasoning</TypographyParagraph>
            </Toggle>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant={"ghost"} className="w-fit h-fit p-2 ">
              <Mic strokeWidth={1} />
            </Button>
            <Button onClick={handleSendMessage} className="w-fit h-fit p-2 ">
              <ArrowUpIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
