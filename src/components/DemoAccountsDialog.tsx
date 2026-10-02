import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const accounts = [
  { role: "ActiveStudent", username: "student1@nait.ca", password: "Password2015" },
  { role: "Accounting", username: "accounting", password: "Password2015" },
  { role: "Executive", username: "executive", password: "Password2015" },
];

function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      /* ignore */
    }
  };
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="min-w-0">
        <span className="text-tiny text-muted-foreground mr-2">{label}:</span>
        <code className="text-sm text-foreground break-all">{value}</code>
      </div>
      <Button
        type="button"
        variant="ghost"
        size="sm"
        onClick={copy}
        aria-label={`Copy ${label.toLowerCase()}`}
        className="h-7 px-2 shrink-0"
      >
        {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
        <span className="ml-1 text-xs">{copied ? "Copied" : "Copy"}</span>
      </Button>
    </div>
  );
}

export default function DemoAccountsDialog({ liveUrl }: { liveUrl: string }) {
  return (
    <div className="mt-2 rounded-lg border border-border p-4 max-w-reading space-y-2">
      <p className="text-sm font-medium text-primary">Try the Live Demo</p>
      <p className="text-sm text-foreground/80">
        Explore SecureBill using one of the demo accounts below. Try different roles to see how
        access permissions change.
      </p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">View Demo Accounts</Button>
        </DialogTrigger>
        <DialogContent className="w-[calc(100%-2rem)] max-w-md rounded-lg">
          <DialogHeader>
            <DialogTitle>SecureBill Demo Accounts</DialogTitle>
            <DialogDescription>Try each role to explore different access permissions.</DialogDescription>
          </DialogHeader>
          <div className="space-y-3">
            {accounts.map((a) => (
              <div key={a.role} className="rounded-md border border-border p-3 space-y-1.5">
                <p className="text-sm font-semibold text-primary">{a.role}</p>
                <CopyField label="Username" value={a.username} />
                <CopyField label="Password" value={a.password} />
              </div>
            ))}
          </div>
          <Button asChild className="w-full">
            <a href={liveUrl} target="_blank" rel="noopener noreferrer">Launch Live Demo →</a>
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
