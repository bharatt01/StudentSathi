import {
  Building2,
  School,
  Home,
  Users,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
} from "lucide-react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth, db } from "../firebase/config";

import {
  collection,
  getDocs,
  query,
  orderBy,
  limit,
} from "firebase/firestore";

export default function SuperAdminDashboard() {
  const navigate = useNavigate();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [stats, setStats] = useState({
    colleges: 0,
    hostels: 0,
    pgs: 0,
    institutes: 0,
  });

  const [recentListings, setRecentListings] = useState([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const collegesSnap = await getDocs(collection(db, "colleges"));
      const hostelsSnap = await getDocs(collection(db, "hostels"));
      const pgsSnap = await getDocs(collection(db, "pgs"));
      const institutesSnap = await getDocs(collection(db, "institutes"));

      setStats({
        colleges: collegesSnap.size,
        hostels: hostelsSnap.size,
        pgs: pgsSnap.size,
        institutes: institutesSnap.size,
      });

      const listingsRef = query(
        collection(db, "listings"),
        orderBy("createdAt", "desc"),
        limit(10)
      );

      const listingSnap = await getDocs(listingsRef);

      const data = listingSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setRecentListings(data);
    } catch (err) {
      console.log(err);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/superadmin/login");
  };

  return (
    <div className="min-h-screen bg-slate-100 flex">
      {/* Mobile Button */}

      <button
        onClick={() => setSidebarOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 bg-slate-900 text-white p-2 rounded-lg"
      >
        <Menu size={20} />
      </button>

      {/* Sidebar Overlay */}

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}

      <aside
        className={`
          fixed lg:static z-50
          top-0 left-0 h-screen
          w-72 bg-slate-950 text-white
          transform transition-transform duration-300
          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }
        `}
      >
        <div className="flex justify-between items-center p-6 border-b border-slate-800">
          <div>
            <h2 className="text-2xl font-bold">
              Student Sathi
            </h2>

            <p className="text-slate-400 text-sm">
              Super Admin
            </p>
          </div>

          <button
            className="lg:hidden"
            onClick={() => setSidebarOpen(false)}
          >
            <X />
          </button>
        </div>

        <nav className="p-4 space-y-2">
          <MenuItem
            icon={<LayoutDashboard size={18} />}
            title="Dashboard"
            link="/superadmin/dashboard"
          />

          <MenuItem
            icon={<Building2 size={18} />}
            title="Colleges"
            link="/superadmin/colleges"
          />

          <MenuItem
            icon={<Home size={18} />}
            title="Hostels"
            link="/superadmin/hostels"
          />

          <MenuItem
            icon={<Home size={18} />}
            title="PGs"
            link="/superadmin/pgs"
          />

          <MenuItem
            icon={<School size={18} />}
            title="Institutes"
            link="/superadmin/institutes"
          />

          <MenuItem
            icon={<Users size={18} />}
            title="Users"
            link="/superadmin/users"
          />
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-slate-800">
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-3 p-3 rounded-xl hover:bg-red-600 transition"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      </aside>

      {/* Main */}

      <main className="flex-1 p-4 lg:p-8">
        <div className="mt-10 lg:mt-0">
          <h1 className="text-3xl font-bold">
            Dashboard Overview
          </h1>

          <p className="text-slate-500 mt-2">
            Manage all listings from one place
          </p>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
          <StatCard
            title="Colleges"
            value={stats.colleges}
          />

          <StatCard
            title="Hostels"
            value={stats.hostels}
          />

          <StatCard
            title="PGs"
            value={stats.pgs}
          />

          <StatCard
            title="Institutes"
            value={stats.institutes}
          />
        </div>

        {/* Quick Actions */}

        <div className="mt-10">
          <h2 className="text-xl font-bold mb-4">
            Quick Actions
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ActionCard
              title="Add College"
              link="/superadmin/dashboard/add/college"
            />

            <ActionCard
              title="Add Hostel"
              link="/superadmin/dashboard/add/hostel"
            />

            <ActionCard
              title="Add PG"
              link="/superadmin/dashboard/add/pg"
            />

            <ActionCard
              title="Add Institute"
              link="/superadmin/dashboard/add/institute"
            />
          </div>
        </div>

        {/* Recent Listings */}

        <div className="mt-10 bg-white rounded-2xl shadow overflow-hidden">
          <div className="p-5 border-b">
            <h2 className="font-bold text-lg">
              Recent Listings
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-4 text-left">
                    Name
                  </th>

                  <th className="p-4 text-left">
                    Type
                  </th>

                  <th className="p-4 text-left">
                    Location
                  </th>

                  <th className="p-4 text-left">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {recentListings.length === 0 ? (
                  <tr>
                    <td
                      colSpan="4"
                      className="p-5 text-center"
                    >
                      No Listings Found
                    </td>
                  </tr>
                ) : (
                  recentListings.map((item) => (
                    <tr
                      key={item.id}
                      className="border-t"
                    >
                      <td className="p-4">
                        {item.name}
                      </td>

                      <td className="p-4">
                        {item.category}
                      </td>

                      <td className="p-4">
                        {item.location}
                      </td>

                      <td className="p-4">
                        {item.status || "Active"}
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
}

function MenuItem({ icon, title, link }) {
  return (
    <Link
      to={link}
      className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-800"
    >
      {icon}
      {title}
    </Link>
  );
}

function StatCard({ title, value }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow">
      <h3 className="text-slate-500">
        {title}
      </h3>

      <h2 className="text-4xl font-bold mt-2">
        {value}
      </h2>
    </div>
  );
}

function ActionCard({ title, link }) {
  return (
    <Link
      to={link}
      className="bg-slate-900 text-white rounded-2xl p-5 hover:bg-slate-800 transition"
    >
      <h3 className="font-bold">
        {title}
      </h3>
    </Link>
  );
}