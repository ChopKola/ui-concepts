import { 
  Clock
} from 'lucide-react';

import { motion } from 'framer-motion';

// --- Mock Data ---
const INCOMING_ORDERS = [
  {
    id: "#CK-9921",
    items: [
      { name: "Jollof Rice Special", qty: 2, notes: "Extra spicy" },
      { name: "Fried Plantain", qty: 1, notes: "" }
    ],
    total: "$28.50",
    customer: "Emmanuel A.",
    time: "2 mins ago",
    status: "New"
  },
  {
    id: "#CK-9922",
    items: [
      { name: "Egusi Soup & Pounded Yam", qty: 1, notes: "" },
      { name: "Goat Meat Pepper Soup", qty: 1, notes: "" }
    ],
    total: "$32.00",
    customer: "Sarah J.",
    time: "5 mins ago",
    status: "New"
  }
];

const OrderTicket = ({ order }: { order: typeof INCOMING_ORDERS[0] }) => (
  <motion.div 
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
  >
    <div className="flex justify-between items-start mb-4 border-b border-dashed border-gray-100 pb-3">
      <div>
        <span className="text-brand-orange font-bold text-lg">{order.id}</span>
        <p className="text-xs text-[#777] flex items-center gap-1"><Clock size={12} /> {order.time}</p>
      </div>
      <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-lg text-xs font-bold animate-pulse">
        New Order
      </span>
    </div>

    <div className="space-y-3 flex-1 mb-4">
      {order.items.map((item, i) => (
        <div key={i} className="flex justify-between text-sm">
          <div className="flex gap-2">
            <span className="font-bold text-[#4b5966] w-4">{item.qty}x</span>
            <div>
              <span className="text-[#4b5966]">{item.name}</span>
              {item.notes && <p className="text-xs text-[#e17055] italic">Note: {item.notes}</p>}
            </div>
          </div>
        </div>
      ))}
    </div>

    <div className="flex justify-between items-center mb-4 pt-3 border-t border-gray-100">
      <span className="text-sm text-[#777]">{order.items.length} Items</span>
      <span className="font-extrabold text-lg text-[#4b5966]">{order.total}</span>
    </div>

    <div className="grid grid-cols-2 gap-3">
      <button className="py-2.5 rounded-xl border border-red-100 text-red-500 hover:bg-red-50 font-bold text-sm transition-colors">
        Reject
      </button>
      <button className="py-2.5 rounded-xl bg-[#5caf90] text-white hover:opacity-90 font-bold text-sm transition-colors shadow-lg shadow-[#5caf90]/20">
        Accept
      </button>
    </div>
  </motion.div>
);
export default OrderTicket