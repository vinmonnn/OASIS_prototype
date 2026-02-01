import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import MainScreen from "../../layouts/mainScreen";
import Title from "../../utilities/title";
import Subtitle from "../../utilities/subtitle";
import { UpperWave, LowerWave } from "../../utilities/waves";

import EmblaCarousel from "../../components/EmblaCarousel";
import "../../embla.css";

import { StudentTable } from "../../components/oasisTable";
import { Text, StatusView, ViewMoaButton } from "../../utilities/tableUtil";

import { Filter } from "../../components/adminComps";
import ReviewRatings from "../../components/reviewRatings";
import AverageRating from "../../components/averageRating";
import { AddReviewCard, ReviewCard } from "../../utilities/card";

import fallbackImg from "../../assets/fallbackImage.jpg";

import { fetchHTEs } from "../../api/student.service";
import { resolveMediaUrl } from "../../utils/media";

export default function HteDirectory() {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const activeHte = searchParams.get("hte");

    const [htes, setHtes] = useState([]);
    const [loading, setLoading] = useState(true);

    /* =============================
       FETCH HTEs FROM BACKEND
    ============================== */
    useEffect(() => {
        loadHTEs();
    }, []);

    async function loadHTEs() {
        try {
            const response = await fetchHTEs();
            setHtes(response.htes || response);
        } catch (err) {
            console.error("Failed to load HTEs", err);
        } finally {
            setLoading(false);
        }
    }

    /* =============================
       HANDLE CAROUSEL CLICK
    ============================== */
    useEffect(() => {
        if (activeHte) {
            navigate(`/hte-profile?hte=${encodeURIComponent(activeHte)}`);
        }
    }, [activeHte, navigate]);

    const setHte = (hteName) => {
        setSearchParams({ hte: hteName });
    };

    /* =============================
       TABLE CONFIG
    ============================== */
    const columns = [
        { header: "HTE Name", render: row => <Text text={row.company_name} /> },
        { header: "Industry", render: row => <Text text={row.industry} /> },
        {
            header: "MOA Signed Date",
            render: row => (
                <Text
                    text={
                        row.moa_signed_at
                            ? new Date(row.moa_signed_at).toLocaleDateString()
                            : "—"
                    }
                />
            )
        },
        {
            header: "MOA Expiration",
            render: row => (
                <Text
                    text={
                        row.moa_expiry_date
                            ? new Date(row.moa_expiry_date).toLocaleDateString()
                            : "—"
                    }
                />
            )
        },
        {
            header: "MOA Status",
            render: row => <StatusView value={row.moa_status} />
        },
        {
            header: "MOA File",
            render: row =>
                row.moa_status === "ACTIVE" ? (
                    <ViewMoaButton
                        url={`${import.meta.env.VITE_API_BASE_URL}/api/student/htes/${row.id}/moa`}
                    />
                ) : (
                    <Text text="N/A" />
                )
        }
    ];

    /* =============================
       CAROUSEL DATA (OVERVIEW)
    ============================== */
    const OPTIONS = { loop: true };

    const SLIDES = htes.map(hte => ({
        thumbnail: hte.thumbnail
            ? resolveMediaUrl(hte.thumbnail)
            : fallbackImg,
        hteName: hte.company_name,
        hteAddress: hte.address
    }));

    return (
        <>
            <MainScreen>
                <div className="flex flex-col justify-center items-center gap-10 w-full">

                    {/* HEADER */}
                    <div className="w-full flex flex-col items-center mb-10">
                        <Title text="HTE Directory" size="text-[3rem]" />
                        <Subtitle
                            size="text-[1rem]"
                            color="text-oasis-button-dark"
                            text="See the lists of HTEs with their MOA and significant details; See the reviews about HTEs and make a review yourself!"
                        />
                    </div>

                    {/* OVERVIEW / CAROUSEL */}
                    <section className="w-full flex flex-col gap-5 justify-center items-center">
                        <Title text="Overview of Host Training Establishment" />
                        <EmblaCarousel
                            options={OPTIONS}
                            slides={SLIDES}
                            onSelectHte={setHte}
                        />
                    </section>

                    {/* TABLE */}
                    <section className="w-full flex flex-col gap-5 justify-center items-center">
                        <Title text="List of available HTE with MOA" />
                        <StudentTable
                            columns={columns}
                            data={htes}
                            isLoading={loading}
                        />
                    </section>

                    {/* REVIEWS (STILL MOCKED) */}
                    <div>
                        <UpperWave />
                        <section className="bg-oasis-blue w-full flex flex-col gap-5 justify-center items-center">
                            <Title text="Student Reviews" />

                            <section className="w-[80%] flex justify-start items-center">
                                <Filter text="Filters" />
                            </section>

                            <section className="w-full p-5 flex flex-row justify-evenly items-center">
                                <ReviewRatings />
                                <AverageRating />
                            </section>

                            <section className="w-full p-5 flex justify-evenly items-center relative">
                                <section className="w-[50%] max-h-100 overflow-y-auto p-5 flex flex-wrap gap-4 rounded-3xl">
                                    <ReviewCard />
                                    <ReviewCard />
                                    <ReviewCard />
                                    <ReviewCard />
                                </section>

                                <AddReviewCard />
                            </section>
                        </section>
                        <LowerWave />
                    </div>

                </div>
            </MainScreen>
        </>
    );
}
