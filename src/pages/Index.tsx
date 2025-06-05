import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  // Dummy cryptocurrency data
  const portfolioData = {
    totalBalance: 42847.32,
    dayChange: 1247.89,
    dayChangePercent: 3.02
  };

  const holdings = [
    { name: "Bitcoin", symbol: "BTC", amount: 1.5432, price: 28734.56, change: 2.34 },
    { name: "Ethereum", symbol: "ETH", amount: 8.7623, price: 1842.33, change: -1.23 },
    { name: "Cardano", symbol: "ADA", amount: 15420.34, price: 0.324, change: 5.67 },
    { name: "Solana", symbol: "SOL", amount: 234.12, price: 21.87, change: -0.89 },
  ];

  const recentTransactions = [
    { type: "Buy", coin: "BTC", amount: 0.2341, time: "2 hours ago" },
    { type: "Sell", coin: "ETH", amount: 1.5678, time: "5 hours ago" },
    { type: "Buy", coin: "ADA", amount: 2500, time: "1 day ago" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="container mx-auto p-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Coin<span className="text-blue-400">tal</span>
          </h1>
          <p className="text-slate-300">Your cryptocurrency portfolio dashboard</p>
        </div>

        {/* Portfolio Overview */}
        <Card className="mb-8 bg-white/10 backdrop-blur-md border-white/20">
          <CardHeader>
            <CardTitle className="text-white">Portfolio Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-3xl font-bold text-white mb-2">
              ${portfolioData.totalBalance.toLocaleString()}
            </div>
            <div className="flex items-center gap-2">
              <Badge variant={portfolioData.dayChange > 0 ? "default" : "destructive"}>
                {portfolioData.dayChange > 0 ? "+" : ""}${portfolioData.dayChange.toFixed(2)}
              </Badge>
              <span className="text-slate-300">
                ({portfolioData.dayChange > 0 ? "+" : ""}{portfolioData.dayChangePercent}%) today
              </span>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Holdings */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Your Holdings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {holdings.map((coin, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 flex items-center justify-center">
                        <span className="text-white font-bold text-sm">{coin.symbol[0]}</span>
                      </div>
                      <div>
                        <div className="text-white font-medium">{coin.name}</div>
                        <div className="text-slate-400 text-sm">{coin.amount.toFixed(4)} {coin.symbol}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-white font-medium">${coin.price.toLocaleString()}</div>
                      <div className={`text-sm ${coin.change > 0 ? 'text-green-400' : 'text-red-400'}`}>
                        {coin.change > 0 ? "+" : ""}{coin.change}%
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Transactions */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentTransactions.map((tx, index) => (
                  <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5">
                    <div className="flex items-center gap-3">
                      <Badge variant={tx.type === "Buy" ? "default" : "secondary"}>
                        {tx.type}
                      </Badge>
                      <div>
                        <div className="text-white font-medium">{tx.coin}</div>
                        <div className="text-slate-400 text-sm">{tx.amount} coins</div>
                      </div>
                    </div>
                    <div className="text-slate-300 text-sm">{tx.time}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm">
            Dummy data for demonstration purposes
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
